<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Introduction from "./lib/sections/Introduction.svelte";
  import AboutMe from "./lib/sections/AboutMe.svelte";
  import Portfolio from "./lib/sections/Portfolio.svelte";
  import Contact from "./lib/sections/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
  import MobileNav from "./lib/MobileNav.svelte";

  let mobileNavOpen = false;
</script>

<svelte:head>
  <!--  <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" />-->
</svelte:head>

<Header on:mobileNavOpen={() => (mobileNavOpen = true)} />

<main>
  <Introduction transitionDelay={1100} />
  <AboutMe />
  <Portfolio />
  <Contact />
</main>

<Footer />

<MobileNav on:close={() => (mobileNavOpen = false)} open={mobileNavOpen} />

<style lang="scss">
  @import "assets/css/variables.scss";
  @import "assets/css/global.scss";
</style>
