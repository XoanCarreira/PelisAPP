

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8ym-Pn4F.js","_app/immutable/chunks/scheduler.clUROcG5.js","_app/immutable/chunks/index.Xu7U07Ss.js"];
export const stylesheets = ["_app/immutable/assets/2.gc_ZSXrv.css"];
export const fonts = [];
