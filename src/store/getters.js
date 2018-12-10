const getters  = {
  checkall(state){
    //已经选中的商品的数量等于所有的商品的数量
    //hassel 已经选中的商品放到hassel的新数组
    //  let hassel = state.goodlist.filter(item=>item.sele==true);
    //  let checkval =  hassel.length === state.goodlist.length;
    //  return checkval;

     //every 
    //  return state.goodlist.every(item =>item.sele === true)
     return !(state.goodlist.some(item=>item.sele==false))
  }
}
export default getters 