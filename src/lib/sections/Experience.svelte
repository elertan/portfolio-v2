<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
</script>

<div class="root">
  <Section id="experience" class="section">
    <Container>
      <SectionTitle>Experience</SectionTitle>
    </Container>
  </Section>
</div>

<style lang="scss">
  .root :global(.section) {
    background-color: var(--color-dark);
  }

  .root {
    color: var(--color-light);
  }
</style>
