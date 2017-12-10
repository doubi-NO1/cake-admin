import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home.vue'
import box from '../page/box.vue'
import template from '../page/template.vue'
import tags from '../page/tags.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'home',
      component: home
    },
    {
      path: '/page',
      name: 'page',
      component: box,
      children: [{
        path: 'template',
        name: 'template',
        component: template
      }, {
        path: 'tags',
        name: 'tags',
        component: tags
      },]
    },
    {
      path: '*',
      name: 'home',
      component: home
    },
  ]
})
