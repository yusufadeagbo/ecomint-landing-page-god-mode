

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/learning/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CxxkSR7E.js","_app/immutable/chunks/eX8QdSTx.js","_app/immutable/chunks/CjX7dd8s.js","_app/immutable/chunks/DXmxDHpX.js"];
export const stylesheets = [];
export const fonts = [];
