import Vue from 'vue'
import Auth from '@/components/auth/index'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagelogin from '@/components/login/Page'
import Dashboard from '@/components/Dashboard'
import Register from '@/components/Register'
import Welcome from '@/components/Welcome'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Pagelogin,
      meta: {logout: true}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {logout: true}
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {logout: true}
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {auth: true}
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: {auth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!Auth.checkAuth()) {
      next({path: '/home'})
    } else {
      if (!Auth.checkName() && to.name !== 'welcome') {
        next({path: '/welcome'})
      } else {
        next()
      }
    }
  } else {
    if (to.matched.some(record => record.meta.logout) && Auth.checkAuth()) {
      next({path: '/'})
    } else {
      next()
    }
  }
})

export default router
