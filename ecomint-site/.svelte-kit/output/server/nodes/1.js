

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BXHAzW52.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/xCRI5bb8.js","_app/immutable/chunks/D_4I5Xv1.js"];
export const stylesheets = [];
export const fonts = [];
