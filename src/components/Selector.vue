<template>
  <div class='selector'>
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
</template>

<script>
export default {
  data () {
    return {
      selection: this.options[0]
    }
  },
  props: {
    options: Array
  },
  watch: {
    selection: {
      handler () {
        this.$emit('selectionChange', this.selection)
      },
      deep: true
    }
  }
}
</script>

<style>
.selector{
  text-align: center;
  line-height: 1.75em;
  display: inline-block;
  color: #fcf7ff;
  background-color: rgba(0, 0, 0, 0);
  border: 0.2em solid #fcf7ff;
  border-radius: 2em;
  
  /* remove default arrow on dropdown select */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.125);
}

.selector span {
  display: inline-block;
  font-size: 0.8em;
  line-height: 1.5em;
  padding: 0.5em 2em;
  margin: 0;
}

.selector span:first-child {
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.selector span:not(:first-child):not(:last-child) {
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.selector span:last-child {
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
