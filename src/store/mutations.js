import * as Types from './mutations-types'
import Vue from 'vue';
const mutations ={
  [Types.ADD_CAR](state,param){
    let good = param.good;
    Vue.set(good,'sele','true');
    let production  = state.goodlist.find(item=>item.id ===good.id)
    //如果商品已经存在 数量加1 如果不存在 数量等于1
    if(production){
     
      production.count+=1;
      //state里面的值必须手动更新 
      state.goodlist=[...state.goodlist];
     }else{
      good.count =1;
      state.goodlist =[...state.goodlist,good]
  }
  }
}
export default mutations