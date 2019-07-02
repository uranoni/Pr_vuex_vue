import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addCount(state) {
      console.log(state)
      state.count += 1;
    }
  },
  actions: {

  }
})
