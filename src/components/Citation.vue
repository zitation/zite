<template>
  <p>{{template(data)}}</p>
</template>

<script>
export default {
  data () {
    return {
      composer: {
        'website': this.composeWebsite,
        'book': this.composeBook
      }
    }
  },
  props: {
    data: Object
  },
  methods: {
    template (data) {
      var type = data.type
      var meta = data.meta
      console.log(data)

      return this.composer[type](meta)
    },
    composeWebsite (meta) {
      // remove http/https
      if (meta.url.startsWith('https://')) {
        meta.url = meta.url.slice(8)
      } else if (meta.url.startsWith('http://')) {
        meta.url = meta.url.slice(7)
      }

      return `${meta.author}. ${meta.date_published}. ${meta.title}. Retrieved ${meta.date_accessed}, from ${meta.url}`
    },
    composeBook (meta) {
      return `${meta.author}. (${meta.date_published.slice(0, 4)}). ${meta.title}. ${meta.place_of_publication}: ${meta.publisher}`
    }
  }
}
</script>

<style>

</style>
