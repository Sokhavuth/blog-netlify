import { e as error } from "../../../../chunks/index.js";
import { u as userDb } from "../../../../chunks/user.js";
import { r as redirect, s as setFlash } from "../../../../chunks/server.js";
async function load({ locals }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  const count = await userDb.count(locals);
  const settings = await locals.settings(locals);
  const pageNumber = Math.ceil(count / settings.dItemLimit);
  const items = await userDb.getUsers(locals, settings.dItemLimit);
  return { user, count, settings, items, info: "អ្នក​និពន្ធ", type: "user", pageNumber };
}
const actions = {
  create: async ({ request, locals, cookies }) => {
    if (locals.user.role !== "Admin") {
      setFlash({ type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​ចុះ​ឈ្មោះ​អ្នក​និពន្ធ​​​ទេ!" }, cookies);
      return;
    }
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");
    const role = data.get("role");
    const email = data.get("email");
    const password = data.get("password");
    const thumb = data.get("thumb");
    const datetime = data.get("datetime");
    const validate = typeof title === "string" && typeof content === "string" && typeof role === "string" && typeof email === "string" && typeof password === "string" && typeof thumb === "string" && typeof datetime === "string";
    if (validate) {
      locals.body = { title, content, role, email, password, thumb, datetime };
      await userDb.createUser(locals);
      setFlash({ type: "success", message: "អ្នក​និព្ធ​ម្នាក់​ត្រូវ​បាន​ចុះ​ឈ្មោះ​!" }, cookies);
    } else {
      throw error(420, "ទិន្នន័យ​បញ្ជូន​មក​មិន​ត្រឹមត្រូវ​ទេ!");
    }
  }
};
export {
  actions,
  load
};
