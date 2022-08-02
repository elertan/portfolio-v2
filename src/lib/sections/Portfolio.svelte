<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
  import PortfolioItem, {
    EPreviewPosition,
  } from "./portfolio/PortfolioItem.svelte";
  import MacbookPreviewImage from "../components/MacbookPreviewImage.svelte";
  import aspSystemPreview from "../../assets/images/asp-system-preview.png";
</script>

<div class="root">
  <Section id="portfolio" class="section">
    <Container>
      <SectionTitle>Portfolio</SectionTitle>

      <PortfolioItem previewPosition={EPreviewPosition.Right}>
        <span slot="title">ASP System</span>
        <div slot="content">
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
        <div slot="preview" style="position: relative; left: 100px;">
          <MacbookPreviewImage width={550} previewSrc={aspSystemPreview} />
        </div>
      </PortfolioItem>

      <PortfolioItem previewPosition={EPreviewPosition.Left}>
        <span slot="title">Fuif</span>
        <div slot="content">
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
        <div slot="preview" style="position: relative; right: 100px;">
          <MacbookPreviewImage width={550} previewSrc={aspSystemPreview} />
        </div>
      </PortfolioItem>
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
