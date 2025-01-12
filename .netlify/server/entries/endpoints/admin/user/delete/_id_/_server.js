import { u as userDb } from "../../../../../../chunks/user.js";
import { r as redirect } from "../../../../../../chunks/server.js";
async function GET({ locals, params, cookies }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  locals.params = params;
  if (user.role !== "Admin") {
    redirect("/admin/user", { type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​លុបអ្នក​និពន្ធ​ទេ​!" }, cookies);
    return;
  }
  await userDb.deleteUser(locals);
  redirect("/admin/user", { type: "success", message: "លុប​បាន​ដោយ​ជោគជ័យ" }, cookies);
}
export {
  GET
};
