<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import LinkedIn from "./icons/LinkedIn.svelte";
  import GitHub from "./icons/GitHub.svelte";
  import Cross from "./icons/Cross.svelte";

  const dispatch = createEventDispatcher();

  export let open: boolean;

  function handleCloseTap() {
    dispatch("close");
  }

  function scrollToTop() {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
    dispatch("close");
  }

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
    dispatch("close");
  }
</script>

<nav class="root" class:open>
  <div on:click={handleCloseTap}>
    <Cross width="28" height="28" fill="#fff" />
  </div>

  <ul>
    <li>
      <a href="#introduction" on:click|preventDefault={scrollToTop}>Home</a>
    </li>
    <li>
      <a href="#about-me" on:click|preventDefault={scrollIntoView}>About Me</a>
    </li>
    <li>
      <a href="#portfolio" on:click|preventDefault={scrollIntoView}>Portfolio</a
      >
    </li>
    <li>
      <a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
    </li>
  </ul>

  <div class="icons">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/denniskievits/">
          <LinkedIn class="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.github.com/elertan/">
          <GitHub class="icon" />
        </a>
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  .root {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;

    padding: calc(1.25 * var(--spacing-unit)) calc(2.25 * var(--spacing-unit))
      calc(1.25 * var(--spacing-unit)) 30px;

    background-color: var(--color-bg);
    transition: opacity 300ms ease-in-out, z-index 300ms ease-in-out;

    ul {
      padding-top: calc(2 * var(--spacing-unit));

      li {
        font-size: calc(2 * var(--font-size));
        margin-bottom: calc(0.5 * var(--spacing-unit));
      }
    }

    .icons {
      display: flex;
      flex: 1;
      align-items: flex-end;
      padding-bottom: calc(3 * var(--spacing-unit));
    }

    .icons > ul {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
    }

    .icons :global(.icon) {
      width: 48px;
      height: 48px;
      fill: var(--color-secondary);
    }
  }

  .root.open {
    z-index: 2674;
    opacity: 100%;
  }
</style>
