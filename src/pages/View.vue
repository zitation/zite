<template>
  <div class="view">
    <h1>View Citations</h1>
    <a href='/#/add' ref='prev'><Button>🡸 New Citation</Button></a>
    <Button v-clipboard:copy='composeAll()'>⎘ Copy All</Button>
    <Selector class='type' v-bind:options='["APA", "MLA", "Harvard"]'/>
    </Selector>
    <ul id='citation-list' v-if='citations.length > 0'>
      <li v-for='(citation, index) in citations' v-bind:key='index'>
        <p>{{composeCitation(citation)}}</p>
        <Button dangerous @click.native='removeCitation(index)'>✖ Remove</Button>

        <Button class='copy' v-clipboard:copy='composeCitation(citation)'>⎘ Copy</Button>
        <Button class='copy' v-clipboard:copy='composeInText(citation)'>⎘ In-text</Button>
      </li>
    </ul>
    <p v-else>Add citations by clicking the 'Add New Citation' button.</p>
  </div>
</template>

<script>
import LocalCitationStorage from '@/services/LocalCitationStorage.js'
import CitationCompose from '@/services/CitationCompose'
import Button from '@/components/Button'
import Selector from '@/components/Selector'

export default {
  data () {
    return {
      citations: LocalCitationStorage.getAll()
    }
  },
  components: {
    Button,
    Selector
  },
  methods: {
    removeCitation (index) {
      LocalCitationStorage.removeByIndex(index)
      this.citations = LocalCitationStorage.getAll()
    },
    composeCitation: CitationCompose.citation,
    composeInText: CitationCompose.inText,
    composeAll () {
      if (this.citations) {
        return this.citations.map(citation => (this.composeCitation(citation) + '\n\n')).join('')
      }
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
  transition-duration: 0.5s;
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
  transition-duration: 0.25s;
}

#citation-list li Button.copy {
  float: right;
}

#citation-list li:hover Button {
  opacity: 1;
}

#citation-list li:hover{
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.125);
}

.type {
  float: right;
  display: inline-block;
}

</style>
