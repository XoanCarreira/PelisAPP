<script>
  export let title;
  export let poster_path;
  export let release_date;
  export let overview;
  export let vote_average;

  import Modal from "./Modal.svelte";

  let showModal = false;
</script>

<div class="card">
  <h3 class="titulo">{title}</h3>
  <img
    class="caratula"
    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
    alt={title}
  />

  <div class="card__modal">
    <button on:click={() => (showModal = true)}>Sinopsis</button>
    <Modal bind:showModal>
      <h4 slot="header">
        {title} - <span class="lanzamento">{release_date}</span>
      </h4>
      <div class="card__sinopsis">
        <p class="sinopsis">{overview}</p>
      </div>
    </Modal>
  </div>
  <div class="valoracion">
    <label for="barra">Valoración público</label>
    <div class="barra__valoracion">
      <progress id="barra" max="10" value={vote_average}></progress>
      <p>{vote_average.toFixed(1)}/10</p>
    </div>
  </div>
</div>

<style>
  .card {
    width: 300px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: inset 0 0 15px rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: var(--fonte-principal);
  }

  img {
    border-radius: 10px;
    box-shadow: 8px 8px 10px rgb(59, 58, 58);
  }

  /* Estilos modal */

  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: #fff;
    letter-spacing: 1.2px;
  }

  .card__modal{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .card__sinopsis {
    /* height: 350px; */
    overflow-y: auto;
  }

  .sinopsis {
    font-size: 1.1rem;
    font-weight: 500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h4 {
    font-size: 1.6rem;
    font-family: var(--fonte-principal);
  }

  .lanzamento {
    font-size: 1rem;
  }

  /* Estilos barra de valoracion */
  .barra__valoracion {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  progress {
    width: 50px;
    height: 12px;
    background: transparent;
  }

  progress::-webkit-progress-bar {
    background-color: rgb(91, 90, 90);
    border-radius: 7px;
  }
  progress::-webkit-progress-value {
    background-color: rgb(0, 138, 32);
    border-radius: 7px;
  }
  progress::-moz-progress-bar {
    background-color: rgb(91, 90, 90);
    border-radius: 7px;
  }
  progress::-moz-progress-value {
    background-color: rgb(0, 138, 32);
    border-radius: 7px;
  }
</style>
