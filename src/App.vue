<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/> 
    </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"/> 
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
</style>
