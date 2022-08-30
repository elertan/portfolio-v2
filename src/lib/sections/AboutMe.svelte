<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";

  import me from "../../assets/images/me.png";
  import thesisSrc from "../../assets/documents/thesis.pdf";
  // import { onMount } from "svelte";

  export let transitionDelay: number = 500;
  export let startTransition = false;

  // onMount(() => {
  //   startTransition = true;
  // });

  function actionWhenInViewport(e) {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          // element in viewport
          startTransition = true;
          // alert(1);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(e);

    return () => observer.disconnect();
  }

  $: titleDelay = transitionDelay;
  $: paragraph1Delay = titleDelay + 200;
  $: paragraph2Delay = paragraph1Delay + 200;
  $: paragraph3Delay = paragraph2Delay + 200;
  $: paragraph4Delay = paragraph3Delay + 200;
  $: paragraph5Delay = paragraph4Delay + 200;
  $: imageDelay = transitionDelay + 700;
</script>

<div class="root" use:actionWhenInViewport>
  <Section id="about-me" class="section">
    {#if startTransition}
      <Container>
        <div
          in:fly={{
            y: 20,
            duration: 500,
            easing: cubicInOut,
            delay: titleDelay,
          }}
        >
          <SectionTitle class="section-title">About Me</SectionTitle>
        </div>
        <div class="layout">
          <div class="content">
            <p
              in:fly={{
                y: 20,
                duration: 500,
                easing: cubicInOut,
                delay: paragraph1Delay,
              }}
            >
              Hello! My name is Dennis Kievits and I love solving technical
              challenges and seeing how the solutions to those challenges end up
              improving the lives of others.
            </p>
            <p
              in:fly={{
                y: 20,
                duration: 500,
                easing: cubicInOut,
                delay: paragraph2Delay,
              }}
            >
              My interest in technology starts all the way back in my childhood.
              When I was about eleven years old, I learned about macros that you
              could create in Microsoft Office which allowed you to develop
              forms which I used to embed and hide flash games out of the
              primary school teacher's sight. &ndash;&ndash; Ever since then
              I've been fascinated about the possibilities that software has to
              offer.
            </p>
            <p
              in:fly={{
                y: 20,
                duration: 500,
                easing: cubicInOut,
                delay: paragraph3Delay,
              }}
            >
              Fast-forward to today, and I've been able gather experience
              working on many different projects ranging from mobile apps to
              large scale web applications.
            </p>
            <p
              in:fly={{
                y: 20,
                duration: 500,
                easing: cubicInOut,
                delay: paragraph4Delay,
              }}
            >
              As for a formal degree, I studied computer science at <a
                href="https://www.hogeschoolrotterdam.nl/"
                >Rotterdam University</a
              >, and graduated with a 8.3 for the research upon
              <a href={thesisSrc} class="thesis-link"
                >"What effect does applying WebAssembly have on a compute
                intensive client-side application versus JavaScript?"</a
              >
              &nbsp;supervised by
              <a href="https://quintor.nl/">Quintor</a>.
            </p>
            <p
              in:fly={{
                y: 20,
                duration: 500,
                easing: cubicInOut,
                delay: paragraph5Delay,
              }}
            >
              Here are technologies that I love or have worked with recently:
            </p>
            <div
              class="technologies-container"
              in:fly={{
                y: 20,
                duration: 500,
                easing: cubicInOut,
                delay: paragraph5Delay,
              }}
            >
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

          <div
            class="photo-container"
            in:fade={{
              duration: 1000,
              easing: cubicInOut,
              delay: imageDelay,
            }}
          >
            <img src={me} alt="Dennis Kievits" />
          </div>
        </div>
      </Container>
    {/if}
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
    //align-items: end;
  }

  .content {
    padding-bottom: calc(5 * var(--spacing-unit));
    width: 100%;
    flex: 1;
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

  .photo-container {
    display: flex;
    align-items: end;

    img {
      width: 525px;
      //height: 600px;
      position: relative;
      //top: 5px;
      left: 80px;
      margin-top: -50px;
      max-width: 525px;
    }
  }

  // Desktop
  @media screen and (min-width: 1024px) {
  }

  // Phone and Tablet
  @media screen and (max-width: 1023px) {
    .layout {
      flex-direction: column;
    }

    .content {
      padding-bottom: 0;
    }

    .photo-container {
      align-items: center;
      justify-content: center;

      img {
        left: 0;
        width: 80%;
        margin-top: 0;
      }
    }
  }
</style>
