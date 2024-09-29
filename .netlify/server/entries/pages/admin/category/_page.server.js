import { e as error } from "../../../../chunks/index.js";
import { c as categoryDB } from "../../../../chunks/category.js";
import { r as redirect, s as setFlash } from "../../../../chunks/server.js";
async function load({ locals }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  const count = await categoryDB.count(locals);
  const settings = await locals.settings(locals);
  const pageNumber = Math.ceil(count / settings.dItemLimit);
  const items = await categoryDB.getCategories(locals, settings.dItemLimit);
  return { user, count, settings, items, info: "ជំពូក", type: "category", pageNumber };
}
const actions = {
  create: async ({ request, locals, cookies }) => {
    if (locals.user.role !== "Admin") {
      setFlash({ type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​បង្កើត​ជំពូក​ទេ!" }, cookies);
      return;
    }
    const data = await request.formData();
    const label = data.get("label");
    const thumb = data.get("thumb");
    const datetime = data.get("datetime");
    const validate = typeof label === "string" && typeof thumb === "string" && typeof datetime === "string";
    if (validate) {
      locals.body = { label, thumb, datetime };
      await categoryDB.createCategory(locals);
      setFlash({ type: "success", message: "ជំពូក​​មួយ​ត្រូវ​បាន​បង្កើត​ឡើង!" }, cookies);
    } else {
      throw error(420, "ទិន្នន័យ​បញ្ជូន​មក​មិន​ត្រឹមត្រូវ​ទេ!");
    }
  }
};
export {
  actions,
  load
};
