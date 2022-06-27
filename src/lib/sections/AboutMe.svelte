<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
</script>

<div class="root">
  <Section id="about-me" class="section">
    <Container>
      <SectionTitle>About Me</SectionTitle>
      <p>
        I'm a software engineer specializing in designing efficient software
        with a focus on exceptional user experience.
      </p>
    </Container>
  </Section>
</div>

<style lang="scss">
  .root :global(.section) {
    //background-color: var(--color-light-grey);
  }

  p {
    margin-top: calc(1 * var(--spacing-unit));
    //color: var(--color-text-muted);
    font-size: var(--font-size);
  }
</style>
