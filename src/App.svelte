<script lang="ts">
    import Header from "./lib/Header.svelte";
    import AboutMe from "./lib/sections/AboutMe.svelte";
    import Experience from "./lib/sections/Experience.svelte";
    import GetInTouch from "./lib/sections/GetInTouch.svelte";
    import Footer from "./lib/Footer.svelte";
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
</svelte:head>

<Header/>

<main>
    <AboutMe/>
    <Experience/>
    <GetInTouch/>
</main>

<Footer />

<style lang="scss">
  @import "assets/css/global.scss";

</style>