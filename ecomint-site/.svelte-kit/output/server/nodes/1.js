

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DTd_jjdN.js","_app/immutable/chunks/eX8QdSTx.js","_app/immutable/chunks/CjX7dd8s.js","_app/immutable/chunks/BbYez225.js"];
export const stylesheets = [];
export const fonts = [];
