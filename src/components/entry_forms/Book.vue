<template>
  <form class='Book' @submit="submitCitation()">
    <input v-model="meta.title" placeholder="Title" required>
    <input v-model="meta.author" placeholder="Author" required>
    <input v-model="meta.location" placeholder="Place of Publication" required>
    <input v-model="meta.publisher" placeholder="Publisher" required>
    <DateInput title='Published' v-model='meta.date_published'></DateInput>
    <input type="submit" value="Add" required>
  </form>
</template>

<script>
import DateInput from '@/components/forms/DateInput'

export default {
  data () {
    return {
      meta: this.defaultValues()
    }
  },
  components: {
    DateInput
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

</style>
