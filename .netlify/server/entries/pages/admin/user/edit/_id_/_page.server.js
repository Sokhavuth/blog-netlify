import { u as userDb } from "../../../../../../chunks/user.js";
import { r as redirect, s as setFlash } from "../../../../../../chunks/server.js";
import { e as error } from "../../../../../../chunks/index.js";
async function load({ locals, params, url }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  locals.params = params;
  const navPage = url.searchParams.get("p");
  locals.body = { page: navPage };
  const count = await userDb.count(locals);
  const settings = await locals.settings(locals);
  const pageNumber = Math.ceil(count / settings.dItemLimit);
  const author = await userDb.getUser(locals);
  const items = await userDb.paginateUsers(locals, settings.dItemLimit);
  return { user, count, settings, author, items, info: "អ្នក​និពន្ធ", type: "user", pageNumber, navPage };
}
const actions = {
  update: async ({ request, locals, cookies }) => {
    if (locals.user.role !== "Admin") {
      setFlash({ type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​កែប្រែ​អ្នក​និពន្ធ​​​ទេ!" }, cookies);
      return;
    }
    const data = await request.formData();
    const params = {};
    params.id = data.get("id");
    locals.params = params;
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
      await userDb.updateUser(locals);
      setFlash({ type: "success", message: "ការ​កែប្រែ​​សំរេច​បាន​ដោយ​ជោគជ័យ" }, cookies);
    } else {
      throw error(420, "ទិន្នន័យ​បញ្ជូន​មក​មិន​ត្រឹមត្រូវ​ទេ!");
    }
  }
};
export {
  actions,
  load
};
