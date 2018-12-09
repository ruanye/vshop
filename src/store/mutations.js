import * as Types from './mutations-types'
const mutations ={
  [Types.ADD_CAR](state,param){
    console.log(param.good)
  }
}
export default mutations