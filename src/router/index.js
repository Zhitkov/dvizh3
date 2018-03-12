import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Categories from '@/components/Categories'
import Market from '@/components/layout/Market'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    }
  ]
})
