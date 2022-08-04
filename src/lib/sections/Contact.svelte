<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
  import Button from "../components/Button.svelte";

  function handleSendEmail() {
    window.location.href = "mailto:dkievits@velachi.com";
  }
</script>

<div class="root">
  <Section id="contact" class="section">
    <Container>
      <SectionTitle class="section-title">Contact</SectionTitle>

      <p>
        Whether you want to discuss what value I could provide to your project,
        or just want to say hi.
      </p>
      <p>I'm always happy to hear from you!</p>

      <Button class="send-email-button" on:click={handleSendEmail}
        >Send me an email</Button
      >
    </Container>
  </Section>
</div>

<style lang="scss">
  .root :global(.section) {
    //background-color: var(--color-light-grey);
    text-align: center;
  }

  .root :global(.section-title) {
    color: var(--color-light);
    margin-bottom: calc(1 * var(--spacing-unit));
  }

  p {
    margin-top: calc(0.5 * var(--spacing-unit));
    color: var(--color-text-muted);
    font-size: var(--font-size);
  }

  .root :global(.send-email-button) {
    margin-top: calc(2 * var(--spacing-unit));
  }
</style>
