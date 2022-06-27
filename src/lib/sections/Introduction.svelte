<script lang="ts">
  import Container from "../components/Container.svelte";
  import Section from "../components/Section.svelte";
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";

  export let transitionDelay: number = 0;

  let ready = false;
  onMount(() => (ready = true));

  $: preDelay = transitionDelay;
  $: nameDelay = preDelay + 500;
  $: headlineDelay = nameDelay + 1000;
  $: introDelay = headlineDelay + 750;
  $: intro2Delay = introDelay + 750;
</script>

<div class="root">
  <Section id="introduction">
    <Container>
      {#if ready}
        <div class="container">
          <p
            class="pre"
            in:fade={{
              y: -100,
              duration: 500,
              easing: cubicInOut,
              delay: preDelay,
            }}
          >
            Hello, my name is
          </p>
          <h1
            class="name"
            in:fade={{ duration: 500, easing: cubicInOut, delay: nameDelay }}
          >
            Dennis Kievits.
          </h1>
          <p
            class="headline"
            in:fade={{
              duration: 500,
              easing: cubicInOut,
              delay: headlineDelay,
            }}
          >
            And technology is what interests me.
          </p>
          <p
            class="intro"
            in:fly={{
              y: 50,
              duration: 500,
              easing: cubicInOut,
              delay: introDelay,
            }}
          >
            I'm a Software Architect specializing in designing and building
            efficient software, without ever sacrificing the focus on an
            exceptional user experience.
          </p>
          <p
            class="intro-2"
            in:fly={{
              y: 50,
              duration: 500,
              easing: cubicInOut,
              delay: intro2Delay,
            }}
          >
            At the moment, I’m focused on building software solutions for my
            clients at <a href="https://www.velachi.com">Velachi</a>.
          </p>
        </div>
      {/if}
    </Container>
  </Section>
</div>

<style lang="scss">
  .root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .root :global(.container) {
  }

  .pre {
    font-size: calc(1 * var(--font-size));
    color: var(--color-text-muted);
  }

  .name {
    font-size: calc(4.25 * var(--font-size));
    font-weight: bolder;
    color: var(--color-primary);
  }

  .headline {
    margin-top: calc(1 * var(--spacing-unit));
    font-size: calc(2.75 * var(--font-size));
    font-weight: bolder;
    //color: var(--color-secondary);
  }

  .intro {
    margin-top: calc(2.5 * var(--spacing-unit));
    font-size: calc(1.1 * var(--font-size));
    color: var(--color-text-muted);
  }

  .intro-2 {
    margin-top: calc(0.3 * var(--spacing-unit));
    font-size: calc(1.1 * var(--font-size));
    color: var(--color-text-muted);
  }
</style>
