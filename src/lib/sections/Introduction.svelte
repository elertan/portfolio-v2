<script lang="ts">
    import Container from "../components/Container.svelte";
    import Section from "../components/Section.svelte";
    import {fly, fade} from 'svelte/transition';
    import {onMount} from "svelte";
    import {cubicInOut} from "svelte/easing";

    let ready = false;
    onMount(() => ready = true);
</script>

<div class="root">
    <Section id="introduction">
        <Container>
            {#if ready}
                <div class="container">
                    <p class="pre" in:fade="{{ y: -100, duration: 500, easing: cubicInOut }}">Hello, my name is</p>
                    <h1 class="name" in:fade="{{ duration: 500, easing: cubicInOut, delay: 600 }}">Dennis
                        Kievits.</h1>
                    <p class="headline" in:fade="{{ duration: 500, easing: cubicInOut, delay: 1500 }}">And
                        technology is what interests me.</p>
                    <p class="intro" in:fly="{{ y: 50, duration: 500, easing: cubicInOut, delay: 2500 }}">I'm a Software
                        Architect specializing in designing and building efficient software,
                        without ever sacrificing the focus on
                        an exceptional user experience.</p>
                    <p class="intro-2" in:fly="{{ y: 50, duration: 500, easing: cubicInOut, delay: 3250 }}">At the
                        moment, I’m focused on building software solutions for my clients at <a
                                href="https://www.velachi.com">Velachi</a>.</p>
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
    margin-top: calc(.3 * var(--spacing-unit));
    font-size: calc(1.1 * var(--font-size));
    color: var(--color-text-muted);
  }
</style>