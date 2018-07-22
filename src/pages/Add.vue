<template>
  <div class="add">
    <h1>Add Citation</h1>
    <Button @click.native="clearForm()">Clear</Button>
    <Selector tabbed v-bind:options="types" @selectionChange="handleTypeChange($event)"/>
    <a href='/#/view' ref='next'><Button class='view'>View All 🡺</Button></a>
    <WebsiteForm v-if="type === 'Website'"/>
    <input type="submit" value="Add" required>
  </div>
</template>

<script>
import LocalCitationStorage from '@/services/LocalCitationStorage.js'
import Button from '@/components/Button'
import Selector from '@/components/Selector'
import WebsiteForm from '@/components/entry_forms/Website'

export default {
  data () {
    return {
      meta: {},
      types: ['Website', 'Book', 'Journal', 'Media', 'Other'],
      type: 'Website'
    }
  },
  components: {
    Button,
    Selector,
    WebsiteForm
  },
  methods: {
    handleTypeChange (e) {
      this.type = e
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
