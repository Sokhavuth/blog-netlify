import { e as error } from "../../../../chunks/index.js";
import settingDb from "../../../../chunks/setting.js";
import { r as redirect, s as setFlash } from "../../../../chunks/server.js";
async function load({ locals }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  const count = await settingDb.count(locals);
  const settings = await locals.settings(locals);
  const pageNumber = Math.ceil(count / settings.dItemLimit);
  const items = await settingDb.getSettings(locals, settings.dItemLimit);
  return { user, count, settings, items, info: "setting ", type: "setting", pageNumber };
}
const actions = {
  create: async ({ request, locals, cookies }) => {
    if (locals.user.role !== "Admin") {
      setFlash({ type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​បង្កើត​​ setting ទេ!" }, cookies);
      return;
    }
    const data = await request.formData();
    const title = data.get("title");
    const description = data.get("description");
    const dashboard = data.get("dashboard");
    const frontend = data.get("frontend");
    const categories = data.get("categories");
    const thumb = data.get("thumb");
    const date = data.get("datetime");
    const validate = typeof title === "string" && typeof description === "string" && typeof dashboard === "string" && typeof frontend === "string" && typeof categories === "string" && typeof thumb === "string" && typeof date === "string";
    if (validate) {
      locals.body = { title, description, dashboard, frontend, categories, thumb, date };
      await settingDb.createSetting(locals);
      setFlash({ type: "success", message: "setting ​​មួយ​ត្រូវ​បាន​បង្កើត​ឡើង!" }, cookies);
    } else {
      throw error(420, "ទិន្នន័យ​បញ្ជូន​មក​មិន​ត្រឹមត្រូវ​ទេ!");
    }
  },
  update: async ({ request, locals, cookies }) => {
    if (locals.user.role !== "Admin") {
      setFlash({ type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​កែប្រែ​​ setting ​ទេ!" }, cookies);
      return;
    }
    const data = await request.formData();
    const title = data.get("title");
    const description = data.get("description");
    const dashboard = data.get("dashboard");
    const frontend = data.get("frontend");
    const categories = data.get("categories");
    const thumb = data.get("thumb");
    const date = data.get("datetime");
    const validate = typeof title === "string" && typeof description === "string" && typeof dashboard === "string" && typeof frontend === "string" && typeof categories === "string" && typeof thumb === "string" && typeof date === "string";
    if (validate) {
      locals.body = { title, description, dashboard, frontend, categories, thumb, date };
      await settingDb.updateSetting(locals);
      setFlash({ type: "success", message: "setting ​​​ត្រូវ​បាន​កែប្រែ!" }, cookies);
    } else {
      throw error(420, "ទិន្នន័យ​បញ្ជូន​មក​មិន​ត្រឹមត្រូវ​ទេ!");
    }
  }
};
export {
  actions,
  load
};
