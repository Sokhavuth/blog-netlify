import * as server from '../entries/pages/admin/setting/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/setting/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/setting/+page.server.js";
export const imports = ["_app/immutable/nodes/16.k2P0MbXa.js","_app/immutable/chunks/scheduler.DH_Nrw1O.js","_app/immutable/chunks/index.B3JSNyDR.js","_app/immutable/chunks/Layout.C5V0v4m5.js","_app/immutable/chunks/Footer.BN0w-ILE.js","_app/immutable/chunks/Items.kaDAn5v-.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.C1d4-V24.js","_app/immutable/chunks/stores.LpTSbvkK.js"];
export const stylesheets = ["_app/immutable/assets/16.CSd1uy0l.css","_app/immutable/assets/Layout.kO18WpKW.css","_app/immutable/assets/Footer.DQ3JVC4n.css","_app/immutable/assets/Items.B6XCbsJf.css"];
export const fonts = [];
