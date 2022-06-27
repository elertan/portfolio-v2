<script lang="ts">
    function scrollIntoView({ target }) {
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
            <li><a href="#about-me" on:click|preventDefault={scrollIntoView}>About me</a></li>
            <li><a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a></li>
            <li><a href="#get-in-touch" on:click|preventDefault={scrollIntoView}>Get In Touch</a></li>
        </ul>
    </nav>
    <nav class="socials">
        <ul>
            <li><a href="https://www.linkedin.com/in/denniskievits/">LinkedIn</a></li>
            <li><a href="https://www.github.com/elertan/">GitHub</a></li>
        </ul>
    </nav>
</header>

<style lang="scss">
  header {
    padding: 2rem 2.5rem;
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;

    li {
      a {
        color: #000;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }

  .page-nav > ul {
    column-gap: 20px;
  }

  .socials > ul {
    column-gap: 10px;
  }
</style>