

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/learning/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.mhqCcw3Z.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/C2wVYM7O.js","_app/immutable/chunks/9Wh4L1Yy.js"];
export const stylesheets = [];
export const fonts = [];
