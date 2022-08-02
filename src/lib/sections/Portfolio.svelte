<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
  import MacbookPreviewImage from "../components/MacbookPreviewImage.svelte";

  import aspSystemPreview from "../../assets/images/asp-system-preview.png";
</script>

<div class="root">
  <Section id="portfolio" class="section">
    <Container>
      <SectionTitle>Portfolio</SectionTitle>

      <div style="display: flex; margin-top: 50px; align-items: center;">
        <div>
          <h2>ASP System</h2>
          <p>
            The backbone of <a href="https://www.splash.nl">Splash Lease</a>, a
            company that rents washing machines, dryers, dishwashers and many
            more to student houses all over the Netherlands.
          </p>
          <p>
            ASP System is an internal web-based application that encompasses all
            functionalities that are required for the business to operate.
          </p>
          <p>Some noteworthy functionalities are:</p>
          <ul>
            <li>Customer management</li>
            <li>Integrated communication</li>
            <li>Product management</li>
            <li>Inventory management</li>
            <li>Financial management</li>
          </ul>
          <p>
            I architected and developed a large majority of this application,
            both front-end and back-end.
          </p>
          <p>
            The main technologies used to build this application were React and
            Node.js, and all of the code was written in Typescript.
          </p>
        </div>
        <div style="position: relative; left:  100px;">
          <MacbookPreviewImage width={550} previewSrc={aspSystemPreview} />
        </div>
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

  h2 {
    font-size: calc(1.3 * var(--font-size));
  }

  p {
    margin-top: calc(1 * var(--spacing-unit));
    font-size: var(--font-size);
    color: var(--color-text-muted-dark);
  }

  ul {
    font-size: var(--font-size);
    color: var(--color-text-muted-dark);
    margin-top: calc(0.5 * var(--spacing-unit));

    li {
      margin-bottom: calc(0.3 * var(--spacing-unit));
    }

    li::before {
      content: "•";
      margin-right: calc(0.5 * var(--spacing-unit));
    }
  }
</style>
