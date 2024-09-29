import { r as redirect } from "../../../../chunks/server.js";
function GET({ cookies }) {
  cookies.delete("access_token", { path: "/" });
  redirect(307, "/login");
}
export {
  GET
};
