import { r as redirect } from "../../../../chunks/index.js";
async function load({ locals }) {
  const user = locals.user;
  if (!user) {
    throw redirect(307, "/login");
  }
  const settings = await locals.settings(locals);
  return { user, settings };
}
export {
  load
};
