<script lang="ts">
    import LinkedIn from "./icons/LinkedIn.svelte";
    import GitHub from "./icons/GitHub.svelte";

    function scrollToTop() {
        document.body.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function scrollIntoView({target}) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<header>
    <nav class="page-nav">
        <ul>
            <li><a href="#introduction" on:click|preventDefault={scrollToTop}>DK</a></li>
            <li><a href="#about-me" on:click|preventDefault={scrollIntoView}>About Me</a></li>
            <li><a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a></li>
            <li><a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a></li>
        </ul>
    </nav>
    <nav class="icons">
        <ul>
            <li><a href="https://www.linkedin.com/in/denniskievits/">
                <LinkedIn class="icon" />
            </a></li>
            <li><a href="https://www.github.com/elertan/">
                <GitHub class="icon" />
            </a></li>
        </ul>
    </nav>
</header>

<style lang="scss">
  header {
    padding: calc(1.25 * var(--spacing-unit)) calc(2.25 * var(--spacing-unit));
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li:first-of-type {
      a {
        color: var(--color-primary);
        text-decoration: none;
        font-weight: bold;
        font-size: calc(1.6 * var(--font-size));
        letter-spacing: 3px;
      }
    }

    li {
      a {
        color: var(--color-secondary);
        text-decoration: none;
        font-weight: bold;
      }
    }
  }

  .page-nav > ul {
    column-gap: calc(2 * var(--spacing-unit));
  }

  .icons > ul {
    column-gap: 30px;
  }

  .icons :global(.icon) {
    width: 25px;
    height: 25px;
    fill: var(--color-secondary);
  }
</style>