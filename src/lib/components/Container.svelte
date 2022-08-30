<div>
  <slot />
</div>

<style lang="scss">
  div {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    max-width: 1276px;
    padding-left: 54px;
    padding-right: 54px;
  }

  // Desktop
  @media screen and (min-width: 1024px) {
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  // Phone
  @media screen and (max-width: 767px) {
    div {
      padding-left: 28px;
      padding-right: 28px;
    }
  }
</style>
