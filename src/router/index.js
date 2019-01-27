import Vue from 'vue'
import Router from 'vue-router'
import MainTemplate from '@/pages/templates/Main'
import Home from '@/pages/Home'
import Add from '@/pages/Add'
import View from '@/pages/View'
import About from '@/pages/About'
import NotFound from '@/pages/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainTemplate,
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
        {
          path: '/about',
          name: 'About Us',
          component: About
        },
        { path: '/404', name: 'Error 404', component: NotFound },
        { path: '*', redirect: '/404' }
      ]
    }
  ]
})
