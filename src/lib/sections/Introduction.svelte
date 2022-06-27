<script lang="ts">
    import Container from "../components/Container.svelte";
    import Section from "../components/Section.svelte";
</script>

<Section id="introduction">
    <Container>
        <div class="root">
            <img class="picture" src="https://denniskievits.com/me.jpg" alt="picture" />
            <h1 class="name">Dennis Kievits</h1>
            <p class="role">Software Engineer</p>
        </div>
    </Container>
</Section>

<style lang="scss">
  .root {
    text-align: center;
  }

  .picture {
    width: 225px;
    border-radius: 50%;
  }

  .name {
    font-size: calc(2.25 * var(--font-size));
    font-weight: bolder;
    margin-top: calc(2 * var(--spacing-unit));
  }

  .role {
    font-size: calc(1.25 * var(--font-size));
    color: var(--color-text-muted);
    margin-top: calc(1.5 * var(--spacing-unit));
  }
</style>