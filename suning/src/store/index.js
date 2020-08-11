import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:true
  },
  mutations: {
    loginAfter(state){
      state.login = false
    }
  },
  actions: {},
  modules: {}
})