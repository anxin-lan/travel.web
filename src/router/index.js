import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home.vue'
import City from '@/components/city/City.vue'
import Detail from '@/components/detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
