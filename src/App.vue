<template>
  <div id="app">
    <transition name="fadein">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
       </keep-alive>
      </transition > 
     <transition name="fadein">
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
.fadein-enter {
  opacity:0;
  transition:all 0.3s linear;
}
.fade-enter-active {
   opacity: 1;
   transition:all 0.3s linear;
}
.fadein-leave-active{
   opacity:0;
   transition:all 0.3s linear;
}
</style>
