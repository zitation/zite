<template>
  <button class='button-component' v-bind:class='{inverted, dangerous}'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    inverted: Boolean,
    dangerous: Boolean
  }
}
</script>

<style>
.button-component {
  text-align: center;
  line-height: 1.75em;
  color: #fcf7ff;
  background-color: rgba(0, 0, 0, 0);
  border: 0.25em solid #fcf7ff;
  margin: 0 0.25em 1em;
  padding: 0.5em 1.5em;
  border-radius: 2em;
  box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.125);
  /* remove default arrow on dorpdown select */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.button-component.inverted {
  font-weight: bold;
  border-color: #fcf7ff;
  background: #fcf7ff;
  color: #333;
}

.button-component.dangerous {
  border-color: #ff3366;
}
</style>
