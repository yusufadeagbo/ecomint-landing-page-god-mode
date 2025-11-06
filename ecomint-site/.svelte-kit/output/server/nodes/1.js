

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CkZUH2rO.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/CtuQGHdX.js","_app/immutable/chunks/DvHw8mJg.js"];
export const stylesheets = [];
export const fonts = [];
