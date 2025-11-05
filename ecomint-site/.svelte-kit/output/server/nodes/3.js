

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agents/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CXtUJ105.js","_app/immutable/chunks/eX8QdSTx.js","_app/immutable/chunks/CjX7dd8s.js","_app/immutable/chunks/COj9XZSY.js"];
export const stylesheets = [];
export const fonts = [];
