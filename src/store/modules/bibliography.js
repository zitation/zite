const state = {
  references: []
}

const getters = {
  references: (state, getters, rootState) => {
    return state.references
  }
}

const mutations = {
  add (state, payload) {
    const data = {type: payload.type, meta: payload.meta}
    state.references.push(data)
  },
  remove (state, index) {
    if (state.references.length === 1) {
      state.references = []
    } else {
      state.references.splice(index, 1)
    }
  }
}

const actions = {
  add ({ commit }, payload) {
    commit('add', payload)
  },
  remove ({ commit }, index) {
    commit('remove', index)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
