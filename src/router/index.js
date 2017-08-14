import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagelogin from '@/components/login/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Pagelogin
    },
    {
      path: '/teste',
      name: 'teste',
      component: Home
    }
  ]
})
