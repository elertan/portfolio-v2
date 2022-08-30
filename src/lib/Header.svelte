<script lang="ts">
  import LinkedIn from "./icons/LinkedIn.svelte";
  import GitHub from "./icons/GitHub.svelte";

  import { fly } from "svelte/transition";
  import { createEventDispatcher, onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import Headroom from "./components/Headroom.svelte";
  import Hamburger from "./icons/Hamburger.svelte";

  const dispatch = createEventDispatcher();

  export let transitionDelay: number = 0;

  let ready = false;
  onMount(() => (ready = true));

  let isPinned = true;
  let scrollY = 0;

  $: introductionDelay = transitionDelay;
  $: aboutMeDelay = introductionDelay + 100;
  $: experienceDelay = aboutMeDelay + 100;
  $: contactDelay = experienceDelay + 100;
  $: linkedInDelay = contactDelay + 300;
  $: gitHubDelay = linkedInDelay + 100;

  function scrollToTop() {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleHamburgerTapped() {
    dispatch("mobileNavOpen");
  }
</script>

<svelte:window bind:scrollY />

<Headroom
  on:pin={() => (isPinned = true)}
  on:unpin={() => (isPinned = false)}
  offset={50}
  duration="350ms"
  clazz="headroom"
>
  <header class:with-boxshadow={scrollY > 50 && isPinned}>
    {#if ready}
      <nav class="page-nav">
        <div
          class="hamburger-container"
          in:fly={{
            y: -50,
            duration: 500,
            easing: cubicInOut,
          }}
          on:click={handleHamburgerTapped}
        >
          <Hamburger width="30" height="30" fill="#fff" />
        </div>
        <ul>
          <li
            class="bar-nav"
            in:fly={{
              y: -50,
              duration: 500,
              easing: cubicInOut,
              delay: introductionDelay,
            }}
          >
            <a href="#introduction" on:click|preventDefault={scrollToTop}>DK</a>
          </li>
          <li
            class="bar-nav"
            in:fly={{
              y: -50,
              duration: 500,
              easing: cubicInOut,
              delay: aboutMeDelay,
            }}
          >
            <a href="#about-me" on:click|preventDefault={scrollIntoView}
              >About Me</a
            >
          </li>
          <li
            class="bar-nav"
            in:fly={{
              y: -50,
              duration: 500,
              easing: cubicInOut,
              delay: experienceDelay,
            }}
          >
            <a href="#portfolio" on:click|preventDefault={scrollIntoView}
              >Portfolio</a
            >
          </li>
          <li
            class="bar-nav"
            in:fly={{
              y: -50,
              duration: 500,
              easing: cubicInOut,
              delay: contactDelay,
            }}
          >
            <a href="#contact" on:click|preventDefault={scrollIntoView}
              >Contact</a
            >
          </li>
        </ul>
      </nav>
      <nav class="icons">
        <ul>
          <li
            in:fly={{
              y: -50,
              duration: 500,
              easing: cubicInOut,
              delay: linkedInDelay,
            }}
          >
            <a href="https://www.linkedin.com/in/denniskievits/">
              <LinkedIn class="icon" />
            </a>
          </li>
          <li
            in:fly={{
              y: -50,
              duration: 500,
              easing: cubicInOut,
              delay: gitHubDelay,
            }}
          >
            <a href="https://www.github.com/elertan/">
              <GitHub class="icon" />
            </a>
          </li>
        </ul>
      </nav>
    {/if}
  </header>
</Headroom>

<style lang="scss">
  :global(.headroom) {
    z-index: 1337;
  }

  header {
    padding: calc(1.25 * var(--spacing-unit)) calc(2.25 * var(--spacing-unit));
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-bg);
  }

  .hamburger-container {
    display: none;
  }

  .with-boxshadow {
    box-shadow: 0 10px 30px -10px rgba(2, 10, 22, 0.7);
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li:first-of-type {
      a {
        color: var(--color-primary);
        text-decoration: none;
        font-weight: bold;
        font-size: calc(1.6 * var(--font-size));
        letter-spacing: 3px;
      }
    }

    li {
      a {
        color: var(--color-secondary);
        text-decoration: none;
        font-weight: bold;
      }
    }
  }

  .page-nav {
    display: flex;
    align-items: center;
  }

  .page-nav > ul {
    column-gap: calc(2 * var(--spacing-unit));
  }

  .icons > ul {
    column-gap: 30px;
  }

  .icons :global(.icon) {
    width: 25px;
    height: 25px;
    fill: var(--color-secondary);
  }

  @media screen and (max-width: 768px) {
    header {
      padding: calc(1.25 * var(--spacing-unit)) calc(2.25 * var(--spacing-unit))
        calc(1.25 * var(--spacing-unit)) 30px;
    }

    .hamburger-container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 2px;
    }

    .page-nav > ul {
      margin-left: 25px;
    }

    .bar-nav {
      display: none;
    }

    .icons {
      display: none;
    }
  }
</style>
