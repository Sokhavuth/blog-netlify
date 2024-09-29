import { p as postDb } from "../../../../../../chunks/post.js";
import { r as redirect, j as json } from "../../../../../../chunks/index.js";
async function GET({ locals, params }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  locals.body = params;
  const settings = await locals.settings(locals);
  const items = await postDb.paginatePosts(locals, settings.dItemLimit);
  return json(items);
}
export {
  GET
};
