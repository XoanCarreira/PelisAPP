<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<Header/>
<Footer/>
<slot/>

<style>
    :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face{
        font-family: "Orbitron";
        src:url(/fonts/Orbitron-VariableFont_wght.ttf);
    }

    @font-face{
        font-family: AllertaStencil;
        src:url(/fonts/AllertaStencil-Regular.ttf);
    }

    :root{
        --fonte-principal:Orbitron;
        --fonte-secundaria:AllertaStencil;
    }

</style>