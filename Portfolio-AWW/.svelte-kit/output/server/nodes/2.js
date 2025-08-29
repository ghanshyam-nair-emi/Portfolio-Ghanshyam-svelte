import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.XBym4XDP.js","_app/immutable/chunks/scheduler.GOssmixh.js","_app/immutable/chunks/index.iTUlS2Rq.js","_app/immutable/chunks/index.8NwuiTUI.js"];
export const stylesheets = ["_app/immutable/assets/2.p0L84sj7.css"];
export const fonts = [];
