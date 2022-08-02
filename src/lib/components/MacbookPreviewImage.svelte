<script lang="ts">
  import macbookSrc from "../../assets/images/macbook-pro-16-inch-2021-frame.png";

  export let previewSrc: string;
  export let width: number;

  $: height = width * 0.64641204;
  $: macbookWidth = width * 1.25;
  $: macbookHeight = height * 1.22;

  $: previewStyle = `top: ${width / 25}px; left: ${width / 7.89473684}px;`;
</script>

<div
  class="root"
  style={`min-width: ${macbookWidth}px; min-height: ${macbookHeight}px;`}
>
  <img
    class="preview"
    src={previewSrc}
    alt="preview"
    {width}
    {height}
    style={previewStyle}
  />
  <img
    src={macbookSrc}
    width={macbookWidth}
    height={macbookHeight}
    alt="macbook"
    class="macbook"
  />
</div>

<style lang="scss">
  .root {
    position: relative;
  }

  .preview {
    position: absolute;
  }

  .macbook {
    position: absolute;
    left: 0;
    top: 0;
  }

  .macbook {
    z-index: 1;
  }
</style>
