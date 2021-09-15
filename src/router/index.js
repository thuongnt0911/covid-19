import Vue from 'vue'
import VueRouter from 'vue-router'

import loginRoute from './login'
import dashboardRoute from './dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  loginRoute,
  dashboardRoute,
]

const router = new VueRouter({
  routes,
})

export default router
