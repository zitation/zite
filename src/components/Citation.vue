<template>
  <p>{{template(data)}}</p>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    template (data) {
      return `${data.author}. ${data.date_published}. ${data.title}. Retrieved ${data.date_accessed}, from ${data.url}`
    }
  }
}
</script>

<style>

</style>
