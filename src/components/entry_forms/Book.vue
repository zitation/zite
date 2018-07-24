<template>
  <form class='Book' @submit="submitCitation()">
    <input type="text" v-model="meta.title" placeholder="Title" required>
    <input type="text" v-model="meta.author" placeholder="Author" required>
    <input type="text" v-model="meta.place_of_publication" placeholder="Place of Publication" required>
    <input type="text" v-model="meta.publisher" placeholder="Publisher" required>
    <label class="date">
      <span>Date Published</span>
      <input type="date" v-model="meta.date_published">
    </label>
    <input type="submit" value="Add" required>
  </form>
</template>

<script>
import LocalCitationStorage from '@/services/LocalCitationStorage.js'

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
        place_of_publication: '',
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
