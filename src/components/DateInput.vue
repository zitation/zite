<template>
  <label class="date">
        <span>{{title}}</span>
        <input type="date" ref="date" :value="value" @input="updateDate()">
  </label>
</template>

<script>
export default {
  props: {
    title: String,
    value: String
  },
  methods: {
    update () {
      this.$emit('input', +this.$refs.date.value)
    }
  }
}
</script>

<style>
.date {
  display: inline-block;
  margin-right: 1em;
}

.date span {
  margin: 1em;
}

.date input[type='date'] {
  line-height: 1.5em;
}
</style>
