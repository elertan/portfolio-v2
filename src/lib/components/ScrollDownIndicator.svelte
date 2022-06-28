<div>
  <svg
    width="25px"
    height="100%"
    viewBox="0 0 247 390"
    xmlns="http://www.w3.org/2000/svg"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
  >
    <path class="wheel" d="M123.359,79.775l0,72.843" />
    <path
      class="mouse"
      d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
    />
  </svg>
  <p>Scroll down</p>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: calc(0.5 * var(--spacing-unit));
    color: var(--color-text-muted);
    font-size: calc(0.85 * var(--font-size));
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(80px);
    }
  }

  svg .wheel {
    animation: scroll ease 2.5s infinite;
  }

  svg > path {
    stroke: var(--color-text-muted);
    stroke-width: 20px;
    fill: none;
  }
</style>
