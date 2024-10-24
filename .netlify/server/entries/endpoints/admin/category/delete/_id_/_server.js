import { c as categoryDB } from "../../../../../../chunks/category.js";
import { r as redirect } from "../../../../../../chunks/server.js";
async function GET({ locals, params, cookies }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  if (locals.user.role !== "Admin") {
    redirect("/admin/category", { type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​លុប​ជំពូក​ឡើយ!" }, cookies);
    return;
  }
  locals.params = params;
  await categoryDB.deleteCategory(locals);
  redirect("/admin/category", { type: "success", message: "លុប​បាន​ដោយ​ជោគជ័យ!" }, cookies);
}
export {
  GET
};