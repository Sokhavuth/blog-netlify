import { p as postDb } from "../../../../../chunks/post.js";
import { u as userDb } from "../../../../../chunks/user.js";
async function load({ locals, params }) {
  locals.params = params;
  const user = locals.user;
  const settings = await locals.settings(locals);
  const post = await postDb.getPost(locals);
  locals.params.id = post.author;
  const author = await userDb.getUser(locals);
  const authorName = author.title;
  const randomPosts = await postDb.getRandomPosts(locals, 7, post);
  const thumb = post.thumb;
  const title = post.title;
  return { post, user, randomPosts, settings, authorName, thumb, title };
}
export {
  load
};
