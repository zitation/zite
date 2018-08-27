<template>
  <form class='Website' @submit="submitCitation()">
    <input v-model="meta.url" v-on:input="updateUrl" placeholder="URL" required>
    <input v-model="meta.title" placeholder="Title" required>
    <input v-model="meta.author" placeholder="Author" required>
    <div class="dates">
      <DateInput title='Accessed' v-model='meta.date_accessed'></DateInput>
      <DateInput title='Published' v-model='meta.date_published'></DateInput>
    </div>
    <input type="submit" value="Add" required>
  </form>
</template>

<script>
import DateInput from '@/components/forms/DateInput'
import { mapActions } from 'vuex'
import MetaFetch from '@/api/meta_fetch.js'
import _ from 'lodash'

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
    updateUrl: _.debounce(function () {
      this.getMeta()
    }, 250),
    async getMeta () {
      var response = false
      try {
        response = await MetaFetch.fetch(this.meta.url)
      } catch (error) {
      }
      if (response) {
        this.meta = Object.assign(this.meta, response.data) // merge, dont cobble
      }
    },
    defaultValues () {
      return {
        url: '',
        title: '',
        author: '',
        date_published: '',
        date_accessed: new Date().toISOString().slice(0, 10)
      }
    },
    clearForm () {
      this.meta = this.defaultValues()
    },
    submitCitation () {
      const data = {type: 'website', meta: this.meta}
      this.add(data)
      this.clearForm()
    },
    ...mapActions('bibliography', [
      'add'
    ])
  }
}
</script>

<style>
.add .dates .date:last-child {
  padding-left: 0;
}

</style>
