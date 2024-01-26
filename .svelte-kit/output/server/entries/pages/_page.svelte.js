import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
const css$2 = {
  code: "dialog.svelte-gdqdzk.svelte-gdqdzk{width:300px;border-radius:5px;border:none;padding:0;background-color:rgb(182, 177, 177);box-shadow:inset 0 0 8px black;margin:0 auto}dialog.svelte-gdqdzk.svelte-gdqdzk::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-gdqdzk>div.svelte-gdqdzk{padding:1em}dialog[open].svelte-gdqdzk.svelte-gdqdzk{animation:svelte-gdqdzk-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-gdqdzk-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-gdqdzk.svelte-gdqdzk::backdrop{animation:svelte-gdqdzk-fade 0.2s ease-out}@keyframes svelte-gdqdzk-fade{from{opacity:0}to{opacity:1}}button.svelte-gdqdzk.svelte-gdqdzk{display:block;margin:0 auto;padding:8px 15px;border-radius:5px;border:none;background-color:black;color:#fff}hr.svelte-gdqdzk.svelte-gdqdzk{margin:10px 0 10px 0}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css$2);
  return ` <dialog class="svelte-gdqdzk"${add_attribute("this", dialog, 0)}> <div class="svelte-gdqdzk">${slots.header ? slots.header({}) : ``} <hr class="svelte-gdqdzk"> ${slots.default ? slots.default({}) : ``} <hr class="svelte-gdqdzk">  <button autofocus class="svelte-gdqdzk" data-svelte-h="svelte-nydn3j">Cerrar</button></div> </dialog>`;
});
const css$1 = {
  code: ".card.svelte-i3arcm{width:300px;background-color:#fff;padding:1rem;border-radius:10px;box-shadow:inset 0 0 15px rgb(0, 0, 0);display:flex;flex-direction:column;justify-content:space-between;gap:1rem;align-items:center}h3.svelte-i3arcm{text-align:center;font-size:1.5rem;margin-bottom:1rem;font-family:var(--fonte-principal)}img.svelte-i3arcm{border-radius:10px;box-shadow:8px 8px 10px rgb(59, 58, 58)}button.svelte-i3arcm{padding:10px;border-radius:5px;border:none;background-color:black;color:#fff;letter-spacing:1.2px}.card__modal.svelte-i3arcm{width:100%;display:flex;justify-content:center}.card__sinopsis.svelte-i3arcm{overflow-y:auto}.sinopsis.svelte-i3arcm{font-size:1.1rem;font-weight:500;font-family:Verdana, Geneva, Tahoma, sans-serif}h4.svelte-i3arcm{font-size:1.6rem;font-family:var(--fonte-principal)}.lanzamento.svelte-i3arcm{font-size:1rem}.barra__valoracion.svelte-i3arcm{display:flex;align-items:center;gap:5px}progress.svelte-i3arcm{width:50px;height:12px;background:transparent}progress.svelte-i3arcm::-webkit-progress-bar{background-color:rgb(91, 90, 90);border-radius:7px}progress.svelte-i3arcm::-webkit-progress-value{background-color:rgb(0, 138, 32);border-radius:7px}progress.svelte-i3arcm::-moz-progress-bar{background-color:rgb(91, 90, 90);border-radius:7px}progress.svelte-i3arcm::-moz-progress-value{background-color:rgb(0, 138, 32);border-radius:7px}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { poster_path } = $$props;
  let { release_date } = $$props;
  let { overview } = $$props;
  let { vote_average } = $$props;
  let showModal = false;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.poster_path === void 0 && $$bindings.poster_path && poster_path !== void 0)
    $$bindings.poster_path(poster_path);
  if ($$props.release_date === void 0 && $$bindings.release_date && release_date !== void 0)
    $$bindings.release_date(release_date);
  if ($$props.overview === void 0 && $$bindings.overview && overview !== void 0)
    $$bindings.overview(overview);
  if ($$props.vote_average === void 0 && $$bindings.vote_average && vote_average !== void 0)
    $$bindings.vote_average(vote_average);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="card svelte-i3arcm"><h3 class="titulo svelte-i3arcm">${escape(title)}</h3> <img class="caratula svelte-i3arcm"${add_attribute("src", `https://image.tmdb.org/t/p/w200${poster_path}`, 0)}${add_attribute("alt", title, 0)}> <div class="card__modal svelte-i3arcm"><button class="svelte-i3arcm" data-svelte-h="svelte-qfj3ki">Sinopsis</button> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h4 slot="header" class="svelte-i3arcm">${escape(title)} - <span class="lanzamento svelte-i3arcm">${escape(release_date)}</span></h4>`;
        },
        default: () => {
          return `<div class="card__sinopsis svelte-i3arcm"><p class="sinopsis svelte-i3arcm">${escape(overview)}</p></div>`;
        }
      }
    )}</div> <div class="valoracion"><label for="barra" data-svelte-h="svelte-1tfgmah">Valoración público</label> <div class="barra__valoracion svelte-i3arcm"><progress id="barra" max="10"${add_attribute("value", vote_average, 0)} class="svelte-i3arcm"></progress> <p>${escape(vote_average.toFixed(1))}/10</p></div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const css = {
  code: "main.svelte-11w6g9v{background-color:#000000;padding:20px 20px 100px 20px;min-height:100vh;display:flex;flex-direction:column;align-items:center;gap:2rem}input.svelte-11w6g9v{font-size:1.1rem;border:none;border-radius:3px;box-shadow:inset 0 0 3px black;background-color:#eee;padding:10px}button.svelte-11w6g9v{padding:10px;font-size:1.1rem;font-weight:700;border:none;border-radius:3px;background-color:#ffffff;color:#000000}button.svelte-11w6g9v:active{transform:scale(0.95)}.resultados.svelte-11w6g9v{display:flex;justify-content:center;flex-wrap:wrap;gap:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const API_KEY = define_import_meta_env_default.VITE_TMDB_API_KEY;
  let searchTerm = "";
  let movies = [];
  if ($$props.API_KEY === void 0 && $$bindings.API_KEY && API_KEY !== void 0)
    $$bindings.API_KEY(API_KEY);
  $$result.css.add(css);
  return `<main class="svelte-11w6g9v"><div class="buscador"><input id="busca" placeholder="Introduce un título" class="svelte-11w6g9v"${add_attribute("value", searchTerm, 0)}> <button class="svelte-11w6g9v" data-svelte-h="svelte-1e8d1md">BUSCAR</button></div> ${movies.length > 0 ? `<div class="resultados svelte-11w6g9v">${each(movies, (movie) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average
      },
      {},
      {}
    )}`;
  })}</div>` : `<p data-svelte-h="svelte-19bwllk">Non encontrada</p>`} </main>`;
});
export {
  Page as default
};
