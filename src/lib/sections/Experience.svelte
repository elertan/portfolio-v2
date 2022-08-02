<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
  import MacbookPreviewImage from "../components/MacbookPreviewImage.svelte";

  import aspSystemPreview from "../../assets/images/asp-system-preview.png";
</script>

<div class="root">
  <Section id="experience" class="section">
    <Container>
      <SectionTitle>Experience</SectionTitle>

      <div style="display: flex;">
        <div>
          <h2>ASP System</h2>
          <p>
            The backbone of <a href="https://www.splash.nl">Splash Lease</a>, a
            company that rents washing machines, dryers, dishwashers and many
            more to student houses all over the Netherlands.
          </p>
          <p>
            I worked on architecting and developing a large majority of this
            application. ASP System is an internal web-based application that
            encompasses all functionalities that are required for the business
            to operate.
          </p>
          <p>Some of the functionalities include:</p>
          <ul>
            <li>Customer management</li>
            <li>Integrated communication</li>
            <li>Product management</li>
            <li>Inventory management</li>
            <li>Financial management</li>
          </ul>
        </div>
        <MacbookPreviewImage width={500} previewSrc={aspSystemPreview} />
      </div>
    </Container>
  </Section>
</div>

<style lang="scss">
  .root :global(.section) {
    background-color: var(--color-light);
  }

  .root {
    color: var(--color-dark);
  }
</style>
