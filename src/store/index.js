import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const UserAgent = navigator.userAgent.toLowerCase()

export default new Vuex.Store({
  state: {
    city: '上海',
    isClient: /dcloud/.test(UserAgent)
  },
  mutations: {
    changeCity (ctx, city) {
      ctx.city = city
    }
  },
  actions: {},
  modules: {}
})
