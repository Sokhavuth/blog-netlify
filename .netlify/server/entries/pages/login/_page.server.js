import { u as userDb } from "../../../chunks/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { S as SECRET_KEY } from "../../../chunks/private.js";
import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    locals.body = { email, password };
    const user = await userDb.checkUser(locals);
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const data2 = { id: user.id, role: user.role, name: user.title };
        const token = jwt.sign(data2, SECRET_KEY, { expiresIn: "12h" });
        cookies.set("access_token", token, { path: "/" });
        throw redirect(303, "/admin");
      } else {
        locals.message = "ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ";
      }
    } else {
      locals.message = "Email មិន​ត្រឹមត្រូវទេ";
    }
  }
};
async function load({ locals }) {
  return {
    message: locals.message
  };
}
export {
  actions,
  load
};
