import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    strict:true,
    state:{
       count:0  
     },
     actions:{
        mincount({commit},param){
           commit('mincount',param)
        }
     },
     mutations:{
        addcount(state,param){
          state.count +=param
        },
        mincount(state,param){
          state.count=param
        }
     },
     getters:{
        conutType(state){
           return  state.count%2==0?'偶数':'奇数'
        }
     }

})