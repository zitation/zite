<template>
  <select>
    <option
      v-for='(option, index) in options'
      v-bind:key='index'
      v-bind:value='option'
      v-on:click='selection=option'
    >{{option}}</option>
  </select>
</template>

<script>
export default {
  props: {
    options: Array
  }
}
</script>

<style>
select {
  text-align: center;
  color: #fcf7ff;
  background-color: rgba(0, 0, 0, 0);
  border: 0.5em solid #fcf7ff;
  margin: 0 0.25em 1em;
  padding: 0.5em 1em;
  border-radius: 2em;
  /* remove default arrow on dorpdown select */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select option {
  padding: 0;
  margin: 0;
}
</style>
