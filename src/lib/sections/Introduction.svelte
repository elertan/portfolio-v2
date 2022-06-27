<script lang="ts">
    import Container from "../components/Container.svelte";
    import Section from "../components/Section.svelte";
</script>

<div class="root">
    <Section id="introduction">
        <Container>
            <div class="container">
                <!--                <img class="picture" src="https://denniskievits.com/me.jpg" alt="picture" />-->
                <!--                <h1 class="name">Dennis Kievits</h1>-->
                <!--                <p class="role">Software Engineer</p>-->

                <p class="pre">Hey! I am</p>
                <h1 class="name">Dennis Kievits.</h1>
                <p class="headline">And technology is what drives me every day.</p>
                <p class="intro">I'm a software engineer specializing in designing and building efficient software, without sacrificing the focus on
                    an exceptional user experience.</p>
                <p class="intro-2">At the moment, I’m focused on building software solutions for my clients at Velachi.</p>
            </div>
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
    font-size: calc(2.5 * var(--font-size));
    font-weight: bolder;
  }

  .intro {
    margin-top: calc(2 * var(--spacing-unit));
    font-size: calc(1 * var(--font-size));
    color: var(--color-text-muted);
  }

  .intro-2 {
    font-size: calc(1 * var(--font-size));
    color: var(--color-text-muted);
  }
</style>