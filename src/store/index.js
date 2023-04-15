import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragonLimk: 'https://dra.so/f49797aa4'
  },
  getters: {
    siteLink:({dragonLimk})=>dragonLimk
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
