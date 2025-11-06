

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.LL-eIeOF.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/D0j8WKZr.js","_app/immutable/chunks/CCdoO8oQ.js"];
export const stylesheets = [];
export const fonts = [];
