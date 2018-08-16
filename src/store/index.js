import Vue from 'vue';
import Vuex from 'vuex';

import state from'./state';
import getters from'./getters';
import actions from'./actions';
import mutations from'./mutations';

import home from './modules/home';
import user from './modules/user';
import setting from './modules/setting'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules:{
    home,
    user,
    setting
  }
})







