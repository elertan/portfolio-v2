<h2 {...$$props}>
  <slot />
</h2>

<style lang="scss">
  h2 {
    font-size: calc(1.5 * var(--font-size));
    font-weight: bolder;
    color: var(--color-primary);
  }
</style>
