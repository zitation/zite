<template>
  <form class='Book' @submit="submitCitation()">
    <input v-model="meta.title" placeholder="Title" required>
    <input v-model="meta.author" placeholder="Author" required>
    <input v-model="meta.location" placeholder="Place of Publication" required>
    <input v-model="meta.publisher" placeholder="Publisher" required>
    <label class="date">
      <span>Published</span>
      <input type="date" v-model="meta.date_published">
    </label>
    <input type="submit" value="Add" required>
  </form>
</template>

<script>

export default {
  data () {
    return {
      meta: this.defaultValues()
    }
  },
  methods: {
    defaultValues () {
      return {
        url: '',
        title: '',
        author: '',
        date_published: '',
        location: '',
        publisher: ''
      }
    },
    clearForm () {
      this.meta = this.defaultValues()
    },
    submitCitation () {
    }
  }
}
</script>

<style>
form.Book .date input {
  width: 50%;
}
</style>
