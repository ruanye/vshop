<template>
  <div id="app">
    <router-view/>
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
a{
  color: #666;
  text-decoration: none;
}
</style>
