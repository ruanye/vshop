import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    strict:true,
    state:{
       count:0  
     },
     actions:{

     },
     mutations:{
        addcount(state){
          state.count++
        }
     },
     getters:{

     }

})