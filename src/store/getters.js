const getters  = {
    getAllCheck(state){
    //已经选中的商品的数量等于所有的商品的数量
    //hassel 已经选中的商品放到hassel的新数组
    //  let hassel = state.goodlist.filter(item=>item.sele==true);
    //  let checkval =  hassel.length === state.goodlist.length;
    //  return checkval;

     //every 
     return state.goodlist.every(item =>item.sele === true)
    //  return !(state.goodlist.some(item=>item.sele==false))
  },
  allCount(state){
    //所有选中的放一个数组（buyAry）
    let buyAry = state.goodlist.filter(item =>item.sele === true)
    //选中的进行求和  
   return  buyAry.reduce((prev,next)=>prev + next.count,0)
  },
  totalPrice(state){
   return state.goodlist.filter(item =>item.sele === true).reduce((prev,next)=>prev+next.count*next.price,0)
  }
}
export default getters 