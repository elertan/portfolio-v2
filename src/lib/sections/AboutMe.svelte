<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";

  import me from "../../assets/images/me.png";
  import thesisSrc from "../../assets/documents/thesis.pdf";
</script>

<div class="root">
  <Section id="about-me" class="section">
    <Container>
      <SectionTitle class="section-title">About Me</SectionTitle>
      <div class="layout">
        <div class="content">
          <p>
            Hello! My name is Dennis Kievits and I love solving technical
            challenges and seeing how the solutions to those challenges end up
            improving the lives of others.
          </p>
          <p>
            My interest in technology starts all the way back in my childhood.
            When I was about eleven years old, I learned about macros that you
            could create in Microsoft Office which allowed you to develop forms
            which I used to embed and hide flash games out of the primary school
            teacher's sight. &ndash;&ndash; Ever since then I've been fascinated
            about the possibilities that software has to offer.
          </p>
          <p>
            Fast-forward to today, and I've been able gather experience working
            on many different projects ranging from mobile apps to large scale
            web applications.
          </p>
          <p>
            As for a formal degree, I studied computer science at <a
              href="https://www.hogeschoolrotterdam.nl/">Rotterdam University</a
            >, and graduated Cum Laude with a 8.3 for the research upon
            <a href={thesisSrc} class="thesis-link"
              >"What effect does applying WebAssembly have on a compute
              intensive client-side application versus JavaScript?"</a
            >
            &nbsp;supervised by
            <a href="https://quintor.nl/">Quintor</a>.
          </p>
          <p>Here are technologies that I love or have worked with recently:</p>
          <div class="technologies-container">
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>

            <ul>
              <li>Rust</li>
              <li>Flutter</li>
              <li>.NET</li>
            </ul>
          </div>
        </div>
        <div>
          <img src={me} alt="Photo of Dennis Kievits" />
        </div>
      </div>
    </Container>
  </Section>
</div>

<style lang="scss">
  .root :global(.section) {
    background-color: var(--color-dark);
    padding-bottom: 0;
  }

  .root :global(.section-title) {
    color: var(--color-light);
  }

  .layout {
    display: flex;
    align-items: end;
  }

  .content {
    padding-bottom: calc(5 * var(--spacing-unit));
  }

  p {
    margin-top: calc(1 * var(--spacing-unit));
    font-size: var(--font-size);
    color: var(--color-text-muted);

    max-width: calc(30 * var(--spacing-unit));
  }

  .thesis-link {
    font-style: italic;
  }

  .technologies-container {
    padding-top: calc(1 * var(--spacing-unit));
    display: flex;
    column-gap: calc(3 * var(--spacing-unit));

    li {
      margin-bottom: calc(0.3 * var(--spacing-unit));
      color: var(--color-text-muted);
      font-size: var(--font-size);
    }

    li::before {
      content: "•";
      margin-right: calc(0.5 * var(--spacing-unit));
    }
  }

  img {
    width: 500px;
    //height: 600px;
    position: relative;
    top: 5px;
    left: 80px;
    margin-top: -50px;
  }
</style>
