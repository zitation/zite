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
  add (state, payload) {
    console.log(payload)
    const data = {type: payload.type, meta: payload.meta}
    state.references.push(data)
    console.log('well hello')
  }
}

const actions = {
  add ({ commit }, payload) {
    commit('add', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
