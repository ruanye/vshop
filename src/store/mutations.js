import * as Types from './mutations-types'
import Vue from 'vue';
const mutations ={
  [Types.ADD_CAR](state,param){
    let good = param.good;
    Vue.set(good,'sele',true);
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
  },
  //单选事件 
  change(state,good){
    //找到点击的项
    let prod =  state.goodlist.find(item=>item.id ===good.id);
    //改变点击这一项的值 
    prod.sele = good.sele;
    //手动修改state 
    state.goodlist=[...state.goodlist];
  },
  checkall(state,val){
     state.goodlist.forEach(item =>item.sele=val);
     state.goodlist=[...state.goodlist];
  }
}
export default mutations