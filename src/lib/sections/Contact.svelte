<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
</script>

<div class="root">
  <Section id="contact" class="section">
    <Container>
      <SectionTitle>Contact</SectionTitle>
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
