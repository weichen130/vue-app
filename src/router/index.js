import Vue from 'vue'
import Router from 'vue-router'

import home from './home';
import user from './user';
import setting from './setting';

Vue.use(Router)

export default new Router({
  routes: [
    ...home,
    ...user,
    ...setting,
    {
      path: '/',
      redirect:'user'
    }
  ]
})
