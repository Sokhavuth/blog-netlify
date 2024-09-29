import { r as redirect } from "../../../chunks/index.js";
import { p as postDb } from "../../../chunks/post.js";
async function load({ locals }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  const settings = await locals.settings(locals);
  const posts = await postDb.getPosts(locals, 14);
  return { user, posts, settings };
}
export {
  load
};
