<script lang="ts">
  import macbookSrc from "../../assets/images/macbook-pro-16-inch-2021.png";

  export let previewSrc: string;
  export let width: number;
  export let height: number;

  $: macbookWidth = width * 1.24;
  $: macbookHeight = height * 1.231;

  $: previewStyle = `top: ${35}px; left: ${76}px;`;
</script>

<div class="root">
  <img
    src={macbookSrc}
    width={macbookWidth}
    height={macbookHeight}
    alt="macbook"
  />
  <img
    class="preview"
    src={previewSrc}
    alt="preview"
    {width}
    {height}
    style={previewStyle}
  />
</div>

<style lang="scss">
  .root {
    position: relative;
  }

  .preview {
    position: absolute;
  }
</style>
