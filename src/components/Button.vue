<template>
  <button class='button-component' v-bind:class='{inverted, small, dangerous}'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    inverted: Boolean,
    small: Boolean,
    dangerous: Boolean
  }
}
</script>

<style>
.button-component {
  text-align: center;
  color: #fcf7ff;
  background-color: rgba(0, 0, 0, 0);
  border: 0.5em solid #fcf7ff;
  margin: 0 0.25em 1em;
  padding: 0.5em 1.5em;
  border-radius: 2em;
  /* remove default arrow on dorpdown select */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.button-component.inverted {
  border-color: #04724d;
  background: #fcf7ff;
  color: #333;
}

.button-component.small {
  padding: 0.5em 0.8em;
  line-height: 1;
  border-width: 0.4em;
  font-weight: bold;
}

.button-component.dangerous {
  border-color: #ff3366;
}
</style>
