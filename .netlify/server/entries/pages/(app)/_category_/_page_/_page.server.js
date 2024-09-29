import { p as postDb } from "../../../../../chunks/post.js";
async function load({ locals, params }) {
  locals.params = params;
  const query = { where: { categories: { contains: params.category } } };
  const count = await postDb.count(locals, query);
  const settings = await locals.settings(locals);
  const posts = await postDb.paginatePostsByCategory(locals, settings.categoryPostLimit);
  const currentPage = params.page;
  const category = params.category;
  const lastPage = Math.ceil(count / settings.categoryPostLimit);
  const title = category;
  let pageURL;
  if (params.category === "news") {
    pageURL = "news";
  } else if (params.category === "Khmer") {
    pageURL = "movie";
  } else if (params.category === "Thai") {
    pageURL = "movie";
  } else if (params.category === "Chinese") {
    pageURL = "movie";
  } else if (params.category === "Korean") {
    pageURL = "movie";
  } else if (params.category === "world") {
    pageURL = "movie";
  } else if (params.category === "travel") {
    pageURL = "travel";
  } else if (params.category === "game") {
    pageURL = "game";
  }
  return { count, settings, posts, category, currentPage, lastPage, pageURL, title };
}
export {
  load
};
