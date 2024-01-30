<script>
  export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  import Card from "./components/Card.svelte";

  import { fade, fly } from 'svelte/transition';
	let visible = true;

  let searchTerm = "";
  let movies = [];

  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=es-ES`
    );
    const data = await response.json();
    movies = data.results;
    searchTerm = "";
    busca.focus();
  };

</script>

<main>
  <div class="buscador">
    <input id="busca" bind:value={searchTerm} placeholder="Introduce un título" />
    <button on:click={searchMovies}>BUSCAR</button>
  </div>

  {#if movies.length > 0}
    <div class="resultados" in:fly={{ y: 200, duration: 1000 }} out:fade>
      {#each movies as movie (movie.id)}
     <Card title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} overview={movie.overview} vote_average={movie.vote_average}/>
      {/each}
    </div>
  {:else}
    <p>Non encontrada</p>
  {/if}
</main>

<style>
  main {
    background-color: #000000;
    padding:20px 20px 100px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  /* Buscador  */
  .buscador{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  input {
    font-size: 1.1rem;
    border: none;
    border-radius: 3px;
    box-shadow: inset 0 0 3px black;
    background-color: #eee;
    padding: 10px;
  }

  button {
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    background-color: #ffffff;
    color: #000000;
  }

  button:active {
    transform: scale(0.95);
  }

  /* Estilos tarxeta */
  .resultados {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

</style>
