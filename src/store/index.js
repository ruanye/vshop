import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import mutations from './mutations'
const state  ={
  goodlist:[]
}
export default new Vuex.Store({
   state,
   mutations
})