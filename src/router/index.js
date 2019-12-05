import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/City')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/titlenviewbtns',
    name: 'titlenviewbtns',
    component: () => import('@/views/TitleNViewBtns')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
