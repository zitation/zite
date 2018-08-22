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
import LocalCitationStorage from '@/services/local_citation_storage.js'

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
      var sucess = LocalCitationStorage.add('book', this.meta)

      if (sucess) {
        this.clearForm()
      }
    }
  }
}
</script>

<style>
form.Book .date input {
  width: 50%;
}
</style>
