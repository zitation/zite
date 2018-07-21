<template>
  <div v-if='tabbed' class='tabbed selector'>
    <span
      v-for='(option, index) in options'
      v-bind:key='index'
      v-bind:value='option'
      v-on:click='selection=option'
      v-bind:class="{'active' : (option === selection)}"
    >
      {{option}}
    </span>
  </div>
  <select v-else class='selector'>
    <option
      v-for='(option, index) in options'
      v-bind:key='index'
      v-bind:value='option'
      v-on:click='selection=option'
    >
      {{option}}
    </option>
  </select>
</template>

<script>
export default {
  data () {
    return {
      selection: this.options[0]
    }
  },
  props: {
    options: Array,
    tabbed: Boolean
  }
}
</script>

<style>
.selector{
  text-align: center;
  display: inline-block;
  color: #fcf7ff;
  background-color: rgba(0, 0, 0, 0);
  border: 0.35em solid #fcf7ff;
  margin: 0 0.25em;
  padding: 0 0em;
  border-radius: 2em;
  
  /* remove default arrow on dropdown select */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.125);
}

select option {
  padding: 0.5em 2em;
  margin: 0;
}

.tabbed span {
  display: inline-block;
  font-size: 0.8em;
  padding: 0.5em 2em;
  margin: 0;
}

.tabbed span:first-child {
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.tabbed span:not(:first-child):not(:last-child) {
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.tabbed span:last-child {
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.active {
  background-color: white;
  color: #333;
  border-radius: 1em;
  transition-duration: 0.1s;
}

</style>
