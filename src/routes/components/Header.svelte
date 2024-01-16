<header>
  <img src="logoPelis.png" alt="Logo cinta película" />
  <div class="encabezado">
    <h1>Catálogo de películas</h1>
    <p>Millóns de películas, series, documentais...</p>
  </div>
  <img src="logoPelis.png" alt="Logo cinta película" />
</header>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background:linear-gradient(#fff 75%, #000);
    min-height: 120px;
    padding-bottom: 30px;
  }

  img {
    height: 80px;
  }

  .encabezado {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    font-family: var(--fonte-principal);
  }

  p{
    font-size: 1.5rem;
    font-family: var(--fonte-secundaria);
  }
</style>
