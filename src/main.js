import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import Vconsole from 'vconsole'

import './registerServiceWorker'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
const vConsole = new Vconsole()

Vue.use(VueAwesomeSwiper)
Vue.use(vConsole)

console.log(store.state)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
