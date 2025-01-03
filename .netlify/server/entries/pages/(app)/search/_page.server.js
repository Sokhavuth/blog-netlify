import { p as postDb } from "../../../../chunks/post.js";
async function load({ locals }) {
  const settings = await locals.settings(locals);
  const title = "ទំព័រ​ស្វែង​រក";
  const posts = locals.posts;
  return { posts, settings, title };
}
const actions = {
  search: async ({ locals, request }) => {
    const data = await request.formData();
    const categoryKhmer = data.get("category");
    const q = data.get("q");
    const categories = {
      "រឿងខ្មែរ": "Khmer",
      "រឿងថៃ": "Thai",
      "រឿងចិន": "Chinese",
      "រឿងកូរ៉េ": "Korean",
      "ដើរ​​លេង": "travel",
      "ព័ត៌មាន": "news"
    };
    const category = categories[categoryKhmer];
    if (category === "ទាំងអស់") {
      locals.body = { q };
    } else {
      locals.body = { category, q };
    }
    locals.posts = await postDb.searchPosts(locals, 20);
  }
};
export {
  actions,
  load
};
