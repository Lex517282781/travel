import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  mutations: {
    changeCity(ctx, city) {
      ctx.city = city
    }
  },
  actions: {},
  modules: {}
})
