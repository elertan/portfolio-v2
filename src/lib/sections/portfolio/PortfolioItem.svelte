<script context="module" lang="ts">
  export enum EPreviewPosition {
    Left,
    Right,
  }
</script>

<script lang="ts">
  export let previewPosition: EPreviewPosition;
</script>

<div class="root">
  <h1 class="title">
    <slot name="title" />
  </h1>
  <div class="container">
    {#if previewPosition === EPreviewPosition.Left}
      <slot name="preview" />
    {/if}
    <slot name="content" />
    {#if previewPosition === EPreviewPosition.Right}
      <slot name="preview" />
    {/if}
  </div>
</div>

<style lang="scss">
  .root {
    padding-top: calc(2 * var(--spacing-unit));
    padding-bottom: calc(2 * var(--spacing-unit));
  }

  .container {
    display: flex;
    align-items: center;
  }

  .root :global(.title) {
    font-size: calc(1.3 * var(--font-size));
  }

  .right {
    text-align: right;
  }

  .root :global(p) {
    margin-top: calc(1 * var(--spacing-unit));
    font-size: var(--font-size);
    color: var(--color-text-muted-dark);
  }

  .root :global(ul) {
    font-size: var(--font-size);
    color: var(--color-text-muted-dark);
    margin-top: calc(0.5 * var(--spacing-unit));

    :global(li) {
      margin-bottom: calc(0.3 * var(--spacing-unit));
    }

    :global(li::before) {
      content: "•";
      margin-right: calc(0.5 * var(--spacing-unit));
    }
  }
</style>
