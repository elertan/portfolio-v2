<script lang="ts"></script>

<button {...$$props} on:click>
  <slot />
</button>

<style lang="scss">
  button {
    margin: 0;
    border: 1px solid var(--color-primary);
    background-color: transparent;
    color: var(--color-primary);
    padding: 20px 30px;
    outline: 0;
    font-size: var(--font-size);
    transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  }

  button:hover {
    background-color: var(--color-primary);
    color: var(--color-dark);
    cursor: pointer;
  }
</style>
