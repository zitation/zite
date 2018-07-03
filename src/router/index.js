import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/layouts/Main'
import Home from '@/pages/Home'
import Add from '@/pages/Add'
import View from '@/pages/View'
import NotFound from '@/pages/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/add',
          name: 'Add Citation',
          component: Add
        },
        {
          path: '/view',
          name: 'View Citations',
          component: View
        },
        { path: '/404', name: 'Error 404', component: NotFound },
        { path: '*', redirect: '/404' }
      ]
    }
  ]
})
