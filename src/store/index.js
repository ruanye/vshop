import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger';
Vue.use(Vuex);
import mutations from './mutations'
import getters from './getters'
const state  ={
 
  goodlist:[],//购物车列表 
  checkAll:true
  //全选改变的时候提交一次 事件
  //单选改变的时候提交一次数据
  //作业：通过state的方式完成购物车
}
export default new Vuex.Store({
   state,
   mutations,
   getters,
   //plugins:[logger()]
})


