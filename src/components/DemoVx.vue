<template>
  <div class="vuexbox">
    vuexdemo
    <button @click="increase" class="btn">+</button>
    <span>{{count}}</span>
    <button class="btn" @click="minus">-</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
   },
  computed:{
     count(){
       return this.$store.state.count
     } 
   },
   methods:{
     //加
     increase(){
       //只有一个参数的话提交到mutations的方法名
       this.$store.commit('addcount')
     },
     //减
     minus(){

     }
   }
}
</script>


<style lang='less' scoped>
.vuexbox{
   position: relative;
   top:100px;
  text-align: center;
  button,span{
    display: inline-block;
    width: 100px;
    height: 30px;
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
    font-size: 18px;
   
  }
 

}

</style>
