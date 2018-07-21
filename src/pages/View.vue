<template>
  <div class="view">
    <h1>View Citations</h1>
    <a href='/#/add' ref='prev'><Button>🡸 Add New Citation</Button></a>
    <Selector class='type' v-bind:options='["APA", "MLA", "Harvard"]'/>
    </Selector>
    <ul id='citation-list' v-if='citations.length > 0'>
      <li v-for='(citation, index) in citations' v-bind:key='index'>
        <Citation v-bind:data='citation'></Citation>
        <Button dangerous @click.native='removeCitation(index)'>✖ Remove</Button>
        <Button class='copy' @click.native='removeCitation(index)'>⎘ Copy</Button>
      </li>
    </ul>
    <p v-else>Add citations by clicking the 'Add New Citation' button.</p>
  </div>
</template>

<script>
import LocalCitationStorage from '@/services/LocalCitationStorage.js'
import Button from '@/components/Button'
import Selector from '@/components/Selector'
import Citation from '@/components/Citation'

export default {
  data () {
    return {
      citations: LocalCitationStorage.getAll()
    }
  },
  components: {
    Button,
    Selector,
    Citation
  },
  methods: {
    removeCitation (index) {
      LocalCitationStorage.removeByIndex(index)
      this.citations = LocalCitationStorage.getAll()
    }
  }
}
</script>

<style>
.view #citation-list {
  list-style-type: none;
  padding: 1em 0;
  margin: 0;
}

#citation-list li {
  padding: 1em;
  border-radius: 1em;
  box-shadow: none;
}

#citation-list p {
  padding: 0;
  margin: 0 0 0.5em;
}

#citation-list li Button {
  opacity: 0;
  margin: 0 0.5em 0 0;
  padding: 0.35em 0.8em;
  font-size: 0.8em;
}

#citation-list li Button.copy {
  float: right;
}

#citation-list li:hover Button {
  opacity: 1;
  transition-duration: 0.25s;
}

#citation-list li:hover{
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.125);
  transition-duration: 0.25s;
}

.type {
  float: right;
  display: inline-block;
}

</style>
