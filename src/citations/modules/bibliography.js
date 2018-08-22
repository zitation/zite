import localStore from '@/api/local_store.js'

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
    localStore.set('bibliography', state.references)
  },
  remove (state, index) {
    if (state.references.length === 1) {
      state.references = []
    } else {
      state.references.splice(index, 1)
    }
    localStore.set('bibliography', state.references)
  },
  setReferences (state, payload) {
    state.references = payload
  }
}

const actions = {
  add ({ commit }, payload) {
    commit('add', payload)
  },
  remove ({ commit }, index) {
    commit('remove', index)
  },
  load ({ commit }) {
    commit('setReferences', localStore.get('bibliography'))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
