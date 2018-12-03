<template>
  <div class="header">
     <i v-if="showArrow" class="iconfont icon-fanhui" @click="goBack"></i>
     <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
      showArrow:{
         type:Boolean,
         default:false
      }
  },
  data () {
    return {
       msg:1
    }
  },
  methods:{
      goBack(){
         this.$router.go(-1) 
      }
  }
}
</script>
<style scoped lang="less">
.header{
  i{
      position:absolute;
      left: 10px;
  }
  width: 100%;
  height: 40px;
  position: fixed;
  background-color: aqua;
  line-height: 40px;
  text-align: center;
  z-index: 3;
}
</style>
