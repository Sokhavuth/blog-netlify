import * as server from '../entries/pages/(app)/post/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/post/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/post/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.CgqabMF-.js","_app/immutable/chunks/scheduler.DH_Nrw1O.js","_app/immutable/chunks/index.B3JSNyDR.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Layout.CPa4LK3H.js","_app/immutable/chunks/Footer.BN0w-ILE.js"];
export const stylesheets = ["_app/immutable/assets/4.DtqX3SrO.css","_app/immutable/assets/Layout.WMuuBmHG.css","_app/immutable/assets/Footer.DQ3JVC4n.css"];
export const fonts = [];
