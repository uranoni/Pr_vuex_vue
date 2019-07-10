import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    username: "",
    list: []
  },
  //mutation一定是同步操作
  mutations: {
    addCount(state, payload) {
      console.log(payload, state.count)
      state.count = state.count + payload;
    }
  },
  actions: {

  }
})
