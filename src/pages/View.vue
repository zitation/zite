<template>
  <div class="view">
    <h1>View Citations</h1>
    <a href='/#/add' ref='prev'><Button>🡸 New Citation</Button></a>
    <Button v-clipboard:copy='composeAll()'>⎘ Copy All</Button>
    <Selector v-on:selectionChange='formatSelectionChange($event)' class='type' v-bind:options='formats'/>
    </Selector>
    <ul id='citation-list' v-if='citations.length > 0'>
      <li v-for='(citation, index) in citations' v-bind:key='index'>
        <p>{{composeCitation(format, citation)}}</p>
        <Button dangerous @click.native='removeCitation(index)'>✖ Remove</Button>

        <Button class='copy' v-clipboard:copy='composeCitation(format, citation)'>⎘ Copy</Button>
        <Button class='copy' v-clipboard:copy='composeInText(citation)'>⎘ In-text</Button>
      </li>
    </ul>
    <p v-else>Add citations by clicking the 'Add New Citation' button.</p>
  </div>
</template>

<script>
import LocalCitationStorage from '@/services/local_citation_storage.js'
import CitationCompose from '@/services/citation_composer/citation_composer.js'
import Formats from '@/services/citation_composer/formats.js'
import Button from '@/components/Button'
import Selector from '@/components/Selector'

export default {
  data () {
    return {
      citations: LocalCitationStorage.getAll(),
      formats: Object.keys(Formats),
      format: Object.keys(Formats)[0]
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
        return this.citations.map(citation => (this.composeCitation(this.format, citation) + '\n\n')).join('')
      }
    },
    formatSelectionChange (selection) {
      this.format = selection
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
