<template>
  <form class='Website' @submit="submitCitation()">
    <input v-model="meta.url" v-on:input="updateUrl" placeholder="URL" required>
    <input v-model="meta.title" placeholder="Title" required>
    <input v-model="meta.author" placeholder="Author" required>
    <div class="dates">
      <label class="date">
        <span>Accessed</span>
        <input type="date" v-model="meta.date_accessed" required>
      </label>
      <label class="date">
        <span>Published</span>
        <input type="date" v-model="meta.date_published">
      </label>
    </div>
    <input type="submit" value="Add" required>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import MetaFetch from '@/api/meta_fetch.js'
import _ from 'lodash'

export default {
  data () {
    return {
      meta: this.defaultValues()
    }
  },
  methods: {
    updateUrl: _.debounce(function () {
      this.getMeta()
    }, 500),
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
