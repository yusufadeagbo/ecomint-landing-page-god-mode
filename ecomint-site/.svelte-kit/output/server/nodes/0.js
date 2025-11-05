import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B74c8S70.js","_app/immutable/chunks/eX8QdSTx.js","_app/immutable/chunks/CjX7dd8s.js"];
export const stylesheets = ["_app/immutable/assets/0.BBH9c2lJ.css"];
export const fonts = [];
