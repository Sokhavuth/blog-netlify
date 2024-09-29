import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import jwt from "jsonwebtoken";
import { S as SECRET_KEY } from "./private.js";
let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient().$extends(withAccelerate());
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient().$extends(withAccelerate());
  }
  prisma = global.prisma;
}
const prisma$1 = prisma;
async function setup(req) {
  const module = await import("./setting.js");
  let set = await module.default.getSettings(req, 1);
  let setting = set[0];
  let settings = {};
  if (setting) {
    settings = {
      siteTitle: setting.title,
      description: setting.description,
      dItemLimit: setting.dashboard,
      indexPostLimit: setting.frontend,
      categoryPostLimit: setting.categories
    };
  } else {
    settings = {
      siteTitle: "ផ្នែក​ខាង​ក្នុង",
      description: "",
      dItemLimit: 10,
      indexPostLimit: 20,
      categoryPostLimit: 20,
      pageTitle: "Home",
      username: "",
      message: "",
      count: 0
    };
  }
  return settings;
}
async function handle({ event, resolve }) {
  event.locals.prisma = prisma$1;
  event.locals.settings = setup;
  if (event.url.pathname.includes("/admin") || event.url.pathname.includes("/post/")) {
    const token = event.cookies.get("access_token");
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        event.locals.user = user;
        return await resolve(event);
      } catch (err) {
        console.log(err);
        return await resolve(event);
      }
    }
  }
  return await resolve(event);
}
export {
  handle
};
