import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DSj1RLRy.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/CtuQGHdX.js"];
export const stylesheets = ["_app/immutable/assets/0.Dwk6gjXP.css"];
export const fonts = [];
