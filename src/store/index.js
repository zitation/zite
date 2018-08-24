import Vue from 'vue'
import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
import bibliography from './modules/bibliography'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bibliography
  },
  strict: debug,
  plugins: [
    CreatePersistedState({
      storage: localStorage
    })
  ]
})
