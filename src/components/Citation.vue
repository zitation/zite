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
      // remove http/https
      if (data.url.startsWith('https://')) {
        data.url = data.url.slice(8)
      } else if (data.url.startsWith('http://')) {
        data.url = data.url.slice(7)
      }

      return `${data.author}. ${data.date_published}. ${data.title}. Retrieved ${data.date_accessed}, from ${data.url}`
    }
  }
}
</script>

<style>

</style>
