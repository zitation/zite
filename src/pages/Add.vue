<template>
  <div class="add">
    <h1>Add Citation</h1>
    <Selector v-bind:options="types" @selectionChange="handleTypeChange($event)"/>
    <a href='/#/view' ref='next'><Button class='view'>View All 🡺</Button></a>
    <WebsiteForm v-if="type === 'Website'"/>
    <BookForm v-else-if="type === 'Book'"/>
    <p v-else>Coming Soon!</p>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Selector from '@/components/Selector'
import WebsiteForm from '@/components/forms/Website'
import BookForm from '@/components/forms/Book'

export default {
  data () {
    return {
      types: ['Website', 'Book', 'Journal', 'Media', 'Other'],
      type: 'Website'
    }
  },
  components: {
    Button,
    Selector,
    WebsiteForm,
    BookForm
  },
  methods: {
    handleTypeChange (type) {
      this.type = type
    }
  }
}
</script>

<style>
.add form {
  padding: 1em 0;
}

.add input:not([type='submit']) {
  font-weight: bold;

  border-radius: 2em;
  border-width: 0;
  box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.125);

  padding: 0.75em 1.5em;
  margin: 0 0 1em;
  width: 100%;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}

.add input[type='submit'] {
  border: none;
  background: none;
  color: #fff;
}

Button.view {
  float: right;
  margin-right: 0;
}
</style>
