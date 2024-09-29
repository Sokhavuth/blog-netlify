

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.R_GnopMV.js","_app/immutable/chunks/scheduler.DH_Nrw1O.js","_app/immutable/chunks/index.B3JSNyDR.js"];
export const stylesheets = [];
export const fonts = [];
