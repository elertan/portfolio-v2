<script lang="ts">
  import Container from "../components/Container.svelte";
  import Section from "../components/Section.svelte";
  import Typewriter from "svelte-typewriter";
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import ScrollDownIndicator from "../components/ScrollDownIndicator.svelte";

  export let transitionDelay: number = 0;

  let ready = false;

  let isDoneTypingName = false;
  let isDoneAnimating = false;

  let documentScrollY = 0;
  let hideScrollDownIndicator = false;

  $: preDelay = transitionDelay;
  $: nameDelay = preDelay + 300;
  $: headlineDelay = nameDelay + 2200;
  $: introDelay = headlineDelay + 750;
  $: intro2Delay = introDelay + 750;

  function handleAnimatingFinished() {
    isDoneAnimating = true;
  }

  onMount(() => {
    setTimeout(handleAnimatingFinished, intro2Delay + 2000);

    ready = true;
  });

  $: if (documentScrollY >= 50) {
    hideScrollDownIndicator = true;
  }
</script>

<svelte:window bind:scrollY={documentScrollY} />

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
            in:fade={{ duration: 300, easing: cubicInOut, delay: nameDelay }}
          >
            <Typewriter
              delay={nameDelay + 500}
              interval={[70, 110, 80]}
              cascade
              on:done={() => (isDoneTypingName = true)}
            >
              Dennis Kievits
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
            I'm a freelance Software Engineer that focuses on software
            architecture and efficiency; without compromising on creating an
            excellent end-user experience.
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
            At the moment, I’m actively working on creating software solutions
            for clients at <a href="https://www.velachi.com">Velachi</a>, whilst
            also designing and developing the next generation of in-house apps.
          </p>

          {#if isDoneAnimating && documentScrollY < 50 && !hideScrollDownIndicator}
            <div
              class="scroll-down-indicator"
              in:fade={{
                duration: 1500,
                easing: cubicInOut,
              }}
              out:fade={{
                duration: 300,
                easing: cubicInOut,
              }}
            >
              <ScrollDownIndicator />
            </div>
          {/if}
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
    min-height: 100vh;
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
    font-size: calc(1 * var(--font-size));
    color: var(--color-text-muted);
    max-width: calc(30 * var(--spacing-unit));
  }

  .intro-2 {
    margin-top: calc(0.5 * var(--spacing-unit));
    font-size: calc(1 * var(--font-size));
    color: var(--color-text-muted);
    max-width: calc(30 * var(--spacing-unit));
  }

  .scroll-down-indicator {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }

  // Phone and tablet
  @media screen and (max-width: 1023px) {
    //.root :global(.typewriter-container > p) {
    //  line-height: 80px;
    //}

    .name {
      font-size: calc(2.5 * var(--font-size));

      &.is-writing-name {
        position: relative;
        top: -23px;
      }
    }

    .headline {
      font-size: calc(1.75 * var(--font-size));
      line-height: 40px;
      margin-top: calc(0.25 * var(--spacing-unit));
    }

    .intro {
      margin-top: calc(1 * var(--spacing-unit));
    }
  }
</style>
