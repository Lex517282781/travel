import Vue from 'vue'
import Vuex from 'vuex'
import { os } from '@/utils/tools'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海',
    isClient: os.isIphone || os.isAndroid
  },
  mutations: {
    changeCity(ctx, city) {
      ctx.city = city
    }
  },
  actions: {},
  modules: {}
})
