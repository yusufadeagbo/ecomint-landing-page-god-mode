

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/learning/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CaVQ2MqQ.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/D0j8WKZr.js","_app/immutable/chunks/i0hX11dn.js"];
export const stylesheets = [];
export const fonts = [];
