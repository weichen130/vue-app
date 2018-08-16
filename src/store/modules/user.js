//引入路由
import router from '@/router/index';

//引入types
import {
  SET_USER_INFO,
  UPDTAE_USER_INFO
} from '../types';

const state ={
  name:"",
  sex:"",
  interest:[]
}

const getters ={

}

const actions ={
  [SET_USER_INFO]({commit,dispatch,state,rootState},params){
    commit(UPDTAE_USER_INFO,params);
  }
}

const mutations ={
  [UPDTAE_USER_INFO](state,params){
    state.name=params.name;
    state.sex=params.sex;
    state.interest=params.interest;
    console.log(state);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
