import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: "header.svelte-1rfrq4q{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;background:linear-gradient(#fff 75%, #000);min-height:120px;padding-bottom:30px}img.svelte-1rfrq4q{height:80px}.encabezado.svelte-1rfrq4q{text-align:center}h1.svelte-1rfrq4q{font-size:3rem;font-family:var(--fonte-principal)}p.svelte-1rfrq4q{font-size:1.5rem;font-family:var(--fonte-secundaria)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="svelte-1rfrq4q" data-svelte-h="svelte-14vz6m7"><img src="logoPelis.png" alt="Logo cinta película" class="svelte-1rfrq4q"> <div class="encabezado svelte-1rfrq4q"><h1 class="svelte-1rfrq4q">Catálogo de películas</h1> <p class="svelte-1rfrq4q">Millóns de películas, series, documentais...</p></div> <img src="logoPelis.png" alt="Logo cinta película" class="svelte-1rfrq4q"> </header>`;
});
const css$1 = {
  code: "footer.svelte-hkpk2s{height:60px;width:100%;background-color:black;color:#fff;display:flex;justify-content:center;align-items:center;position:fixed;bottom:0}p.svelte-hkpk2s{font-size:1.3rem}a.svelte-hkpk2s{color:#fff}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-hkpk2s" data-svelte-h="svelte-psmnbs"><p class="svelte-hkpk2s">Información facilitada por <a target="_blank" href="https://www.themoviedb.org/" class="svelte-hkpk2s">TMBD</a></p> </footer>`;
});
const css = {
  code: '*{margin:0;padding:0;box-sizing:border-box}@font-face{font-family:"Orbitron";src:url(/fonts/Orbitron-VariableFont_wght.ttf)}@font-face{font-family:AllertaStencil;src:url(/fonts/AllertaStencil-Regular.ttf)}:root{--fonte-principal:Orbitron;--fonte-secundaria:AllertaStencil}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
