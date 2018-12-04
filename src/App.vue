<template>
  <div id="app">
    <transition name="fade"  mode="out-in">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
       </keep-alive>
      </transition > 
     <transition name="fade"  mode="out-in">
     <router-view v-if="!$route.meta.keepAlive"/> 
     </transition>
   <Tab/> 
  </div>
</template>
<script>
import Tab from './base/Tab'
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
ul,li{
  list-style: none;
}
a{
  color: #666;
  text-decoration: none;
}

.fade-out-in {
   transform: translateX(100px);
   opacity: 0;
   transition:all 2s;
}
.fade-enter {
  transform: translateX(100px);
  opacity:1;
  transition:all 2s;
}
</style>
