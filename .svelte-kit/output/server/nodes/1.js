

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4gvI-52G.js","_app/immutable/chunks/scheduler.clUROcG5.js","_app/immutable/chunks/index.Xu7U07Ss.js","_app/immutable/chunks/entry.1ejaa5jq.js"];
export const stylesheets = [];
export const fonts = [];
