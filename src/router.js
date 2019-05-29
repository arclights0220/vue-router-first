import Vue from 'vue'
import Router from 'vue-router'
import Apage from './views/Apage.vue'
import Bpage from './views/Bpage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Apage
    },
    {
      path: '/b',
      name: 'home',
      component: Bpage
    }
  ]
})
