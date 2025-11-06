

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agents/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CpOkac4D.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/D0j8WKZr.js","_app/immutable/chunks/BW2W1WfO.js"];
export const stylesheets = [];
export const fonts = [];
