import { p as pageDb } from "../../../../../../chunks/page.js";
import { r as redirect, j as json } from "../../../../../../chunks/index.js";
async function GET({ locals, params }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  locals.body = params;
  const settings = await locals.settings(locals);
  const items = await pageDb.paginatePages(locals, settings.dItemLimit);
  return json(items);
}
export {
  GET
};
