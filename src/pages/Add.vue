<template>
  <div class="add">
    <h1>Add Citation</h1>
    <Selector tabbed v-bind:options="types" @selectionChange="handleTypeChange($event)"/>
    <a href='/#/view' ref='next'><Button class='view'>View All 🡺</Button></a>
    <WebsiteForm v-if="type === 'Website'"/>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Selector from '@/components/Selector'
import WebsiteForm from '@/components/entry_forms/Website'

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
    WebsiteForm
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

Button.view {
  float: right;
  margin-right: 0;
}
</style>
