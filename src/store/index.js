import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:null,
    token:null
  },
  getters:{
    getUserInfo:(state) =>state.userInfo,
    getToken:(state) =>state.token
  },
  mutations: {
    setUserInfo:(state,data) =>state.userInfo = data,
    setToken:(state,data) =>state.token = data
  },
  actions: {
    setUserInfo(context, data) {
      context.commit("setUserInfo", data);
    },

    getToken(context, data) {
      context.commit("getToken", data);
    }
  },
  modules: {
  }
})
