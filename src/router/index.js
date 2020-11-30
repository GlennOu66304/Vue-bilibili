/* eslint-disable no-alert, no-console */
import Vue from 'vue'

import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/register',
    component: register
  },
  {
    path: '/Login',
    component: Login
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})


export default router
