<script lang="ts">
  import Container from "../components/Container.svelte";
  import Section from "../components/Section.svelte";
  import Typewriter from "svelte-typewriter";
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";

  export let transitionDelay: number = 0;

  let ready = false;
  onMount(() => (ready = true));

  let isDoneTypingName = false;

  $: preDelay = transitionDelay;
  $: nameDelay = preDelay + 500;
  $: headlineDelay = nameDelay + 2200;
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
              duration: 500,
              easing: cubicInOut,
              delay: preDelay,
            }}
          >
            Hello, my name is
          </p>
          <h1
            class="name"
            class:is-writing-name={!isDoneTypingName}
            in:fade={{ duration: 500, easing: cubicInOut, delay: nameDelay }}
          >
            <Typewriter
              delay={nameDelay + 500}
              interval={[70, 110, 80]}
              cascade
              on:done={() => (isDoneTypingName = true)}
              >Dennis Kievits.
            </Typewriter>
          </h1>
          <p
            class="headline"
            class:is-writing-name={!isDoneTypingName}
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
            efficient software, that also keeps focus on an exceptional user
            experience.
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
  :root {
    --cursor-color: var(--color-primary);
  }

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

    height: 60px;
  }

  .name {
    font-size: calc(4.25 * var(--font-size));
    font-weight: bolder;
    color: var(--color-primary);

    height: 60px;

    &.is-writing-name {
      position: relative;
      top: -39px;
    }
  }

  .headline {
    margin-top: calc(1 * var(--spacing-unit));
    font-size: calc(2.75 * var(--font-size));
    font-weight: bolder;
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
