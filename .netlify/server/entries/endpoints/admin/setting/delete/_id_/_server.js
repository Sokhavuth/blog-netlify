import settingDb from "../../../../../../chunks/setting.js";
import { r as redirect } from "../../../../../../chunks/server.js";
async function GET({ locals, params, cookies }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  locals.params = params;
  if (user.role !== "Admin") {
    redirect("/admin/setting", { type: "error", message: "អ្នក​គ្មាន​សិទ្ធ​លុប setting ទេ​!" }, cookies);
  }
  await settingDb.deleteSetting(locals);
  redirect("/admin/setting", { type: "success", message: "លុប​បាន​ដោយ​ជោគជ័យ" }, cookies);
}
export {
  GET
};
