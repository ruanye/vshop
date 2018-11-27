<template>
  <div class="footer">
    <router-link to="/home">
     <i class="iconfont icon-yemian-copy-copy"></i>
    <span>首页</span> 
    </router-link>
    <router-link to="/list">
     <i class="iconfont icon-chazhaobiaodanliebiao"></i>
     <span>
      列表页
     </span>
    </router-link>
    <router-link to="/car">
    <i class="iconfont icon-gouwuche"></i>
    <span>购物车</span>
    </router-link>
    <router-link to="/my">
    <i class="iconfont icon-wodedangxuan"></i>
    <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
.footer{
   display: flex;
   width: 100%;
   height: 50px;
   position: fixed;
   bottom: 0;  
   justify-content: center;
   align-items: center;
   border-top: 1px solid #e3e3e3;
   a{
      flex:1;
      text-align: center
   } 
   a.router-link-active{
     color:darkturquoise; 
   }
}
</style>
