import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import doubleCounter from './modules/doubleCounter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter,
    doubleCounter
  }
})
