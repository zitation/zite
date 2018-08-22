import Vue from 'vue'
import Vuex from 'vuex'
import bibliography from './modules/bibliography'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    bibliography
  },
  strict: debug
})
