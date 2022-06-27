<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Introduction from "./lib/sections/Introduction.svelte";
    import AboutMe from "./lib/sections/AboutMe.svelte";
    import Experience from "./lib/sections/Experience.svelte";
    import Contact from "./lib/sections/Contact.svelte";
    import Footer from "./lib/Footer.svelte";
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet">
</svelte:head>

<Header/>

<main>
    <Introduction/>
    <AboutMe/>
    <Experience/>
    <Contact/>
</main>

<Footer/>

<style lang="scss">
  @import "assets/css/variables.scss";
  @import "assets/css/global.scss";

</style>