<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
</script>

<div class="root">
  <Section id="about-me" class="section">
    <Container>
      <SectionTitle class="section-title">About Me</SectionTitle>
      <p>
        Hello! My name is Dennis Kievits and I love solving technical challenges
        and seeing how the solutions to those challenges end up improving the
        lives of others.
      </p>
      <p>
        My interest in technology starts all the way back in my childhood. When
        I was about eleven years old, I learned about macros that you could
        create in Microsoft Office which allowed you to develop forms which I
        used to embed and hide flash games out of the primary school teacher's
        sight. &ndash;&ndash; Ever since then I have been fascinated about the
        possibilities that software has to offer.
      </p>
      <p>
        Fast-forward to today, and I've been able gather experience working on
        many different projects ranging from mobile apps to large scale web
        applications.
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
    </Container>
  </Section>
</div>

<style lang="scss">
  .root :global(.section) {
    background-color: var(--color-light);
  }

  .root :global(.section-title) {
    color: var(--color-dark);
  }

  p {
    margin-top: calc(1 * var(--spacing-unit));
    font-size: var(--font-size);
    color: var(--color-text-muted-dark);

    max-width: calc(30 * var(--spacing-unit));
  }

  .technologies-container {
    padding-top: calc(1 * var(--spacing-unit));
    display: flex;
    column-gap: calc(3 * var(--spacing-unit));

    li {
      margin-bottom: calc(0.3 * var(--spacing-unit));
      color: var(--color-text-muted-dark);
      font-size: var(--font-size);
    }

    li::before {
      content: "•";
      margin-right: calc(0.5 * var(--spacing-unit));
    }
  }
</style>
