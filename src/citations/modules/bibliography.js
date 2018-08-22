const state = {
  references: [{
    'type': 'website',
    'meta': {
      'url': 'test',
      'title': 'Happy Little Trees',
      'author': 'Bob Ross',
      'date_published': '1983-01-11',
      'date_accessed': '2018-01-01'
    }
  }]
}

const getters = {
  references: (state, getters, rootState) => {
    return state.references
  }
}

const mutations = {
  add (state, citation) {
    state.references.push(citation)
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
