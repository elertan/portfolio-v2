<script lang="ts">
  import Headroom from "svelte-headroom";
  import LinkedIn from "./icons/LinkedIn.svelte";
  import GitHub from "./icons/GitHub.svelte";

  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";

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
</script>

<svelte:window bind:scrollY />

<Headroom
  on:pin={() => (isPinned = true)}
  on:unpin={() => (isPinned = false)}
  offset={50}
  duration="350ms"
>
  <header class:with-boxshadow={scrollY > 50 && isPinned}>
    {#if ready}
      <nav class="page-nav">
        <ul>
          <li
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
  header {
    padding: calc(1.25 * var(--spacing-unit)) calc(2.25 * var(--spacing-unit));
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-bg);
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
</style>
