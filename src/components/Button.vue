<template>
  <button class='button-component' v-bind:class='{inverted, dangerous, attractive}'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    inverted: Boolean,
    dangerous: Boolean,
    attractive: Boolean
  }
}
</script>

<style>
.button-component {
  text-align: center;
  color: #fcf7ff;
  background-color: rgba(0, 0, 0, 0);
  border: 0.35em solid #fcf7ff;
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

.button-component.attractive {
  border-color: #21a0a0;
  background-color: #21a0a0;
  font-weight: bold;
}

.button-component.dangerous {
  border-color: #ff3366;
}
</style>
