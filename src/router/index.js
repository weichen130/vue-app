import Vue from 'vue'
import Router from 'vue-router'

import home from './home';
import user from './user';

Vue.use(Router)

export default new Router({
  routes: [
    ...home,
    ...user,
    {
      path: '/',
      redirect:'user'
    }
  ]
})
