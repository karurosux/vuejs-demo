import Vue from 'vue'
import Router from 'vue-router'

import Root from '../components/root.vue'
import UserList from '../components/user-list/user-list.vue'
import Albums from '../components/albums/albums.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root,
      children: [{
        path: '/',
        name: 'root.user-list',
        component: UserList,
        meta: {
          title: 'User List'
        },
      }, {
        path: '/albums',
        name: 'root.albums',
        component: Albums,
        meta: {
          title: 'Albums'
        },
      }]
    }
  ]
})
