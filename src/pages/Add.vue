<template>
  <div class="add">
    <h1>Add Citation</h1>
    <Button @click.native="clearForm()">Clear</Button>
    <Selector tabbed v-bind:options="types" @selectionChange="handleTypeChange($event)"/>
    <a href='/#/view' ref='next'><Button class='view'>View All 🡺</Button></a>
    <form @submit="submitCitation()">
      <input type="text" v-model="meta.url" v-on:input="updateUrl" placeholder="URL" required>
      <input type="text" v-model="meta.title" placeholder="Title" required>
      <input type="text" v-model="meta.author" placeholder="Author" required>
      <div class="dates">
        <label class="date">
          <span>Date Accessed</span>
          <input type="date" v-model="meta.date_accessed" required>
        </label>
        <label class="date">
          <span>Date Published</span>
          <input type="date" v-model="meta.date_published">
        </label>
      </div>
      <input type="submit" value="Add" required>
    </form>
  </div>
</template>

<script>
import MetaFetch from '@/services/MetaFetch.js'
import LocalCitationStorage from '@/services/LocalCitationStorage.js'
import Button from '@/components/Button'
import Selector from '@/components/Selector'
import _ from 'lodash'

export default {
  data () {
    return {
      meta: this.defaultValues(),
      fieldsRequired: Object.keys(this.defaultValues()),
      types: ['Website', 'Book', 'Journal', 'Media', 'Other'],
      type: 'Website'
    }
  },
  components: {
    Button,
    Selector
  },
  methods: {
    handleTypeChange (e) {
      this.type = e
    },
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
      var sucess = LocalCitationStorage.add(this.meta)

      if (sucess) {
        this.clearForm()
      }
    }
  }
}
</script>

<style>
.add form {
  padding: 1em 0;
}

.add input {
  font-weight: bold;

  border-radius: 2em;
  border-width: 0;
  box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.125);

  padding: 0.75em 1.5em;
  margin: 0 0 1em;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}

.add input[type='text'] {
  width: 100%;
}

.add .date:last-child {
  padding-left: 0;
}

.add .date {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 49%;
}

.add .date span {
  font-weight: bold;

  margin: 0 0 0.5em 1em;

  display: block;
}

.add .date input[type='date'] {
  line-height: 1.5em;
  display: inline-block;
  width: 95%;
}

.add input[type='submit'] {
  color: #fcf7ff;
  padding: 0.5em;
  margin-top: 0.5em;
  background: rgba(0, 0, 0, 0);
  border: 0.35em solid #fcf7ff;
  width: 33%;
}

.add input[type='submit']:hover {
}

Button.view {
  float: right;
  margin-right: 0;
}
</style>
