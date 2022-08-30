<section {...$$props}>
  <slot />
</section>

<style lang="scss">
  section {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  @media screen and (max-width: 767px) {
    section {
      padding-top: 48px;
      padding-bottom: 48px;
    }
  }
</style>
