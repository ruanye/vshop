<template>
  <div class="vuexbox">
    vuexdemo
    <!-- <button @click="addcount(10)" class="btn">+</button> -->
    
     <!-- 没有mapMatations的时候调用如下 -->
    <button @click="increase(10)" class="btn">+</button>
    
    <span>{{count}}</span>
    <button class="btn" @click="minus">-</button>
     <p style="font-size:60px">{{conutType}}</p>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
  data () {
    return {}
   },
  computed:{
    //  ...mapState({
    //    count:state=>state.count
    //  }),
     ...mapState(['count']),
     ...mapGetters(['conutType']),
     
   },
   methods:{
      //加
     //  ...mapMutations(['addcount']),
      ...mapMutations({
        increase:'addcount' //把this.inrease映射成 store.commit('addcount')
      }),
     //减
     minus(){
        this.$store.dispatch('mincount',10)
     }

   }
}
</script>


<style lang='less' scoped>
.vuexbox{
   position: relative;
   top:200px;
  text-align: center;
  button,span{
    display: inline-block;
    width: 200px;
    height: 60px;
    line-height: 30px;
    margin: 0 10px;
    background-color:chocolate;
    color:#fff;
    font-size: 14px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  span{
    background: #fff;
    color: #000;
    font-size: 36px;
   
  }
 

}

</style>
