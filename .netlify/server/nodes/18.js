import * as server from '../entries/pages/admin/upload/_page.server.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/upload/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/upload/+page.server.js";
export const imports = ["_app/immutable/nodes/18.B69VY3YX.js","_app/immutable/chunks/scheduler.DH_Nrw1O.js","_app/immutable/chunks/index.B3JSNyDR.js","_app/immutable/chunks/jquery.duOnZAWn.js","_app/immutable/chunks/Layout.C5V0v4m5.js","_app/immutable/chunks/Footer.BN0w-ILE.js"];
export const stylesheets = ["_app/immutable/assets/18.jnphS-tb.css","_app/immutable/assets/Layout.kO18WpKW.css","_app/immutable/assets/Footer.DQ3JVC4n.css"];
export const fonts = [];
