<template>
  <div class="cont">
 {{gid}}
  </div>
</template>

<script>
export default {
  name:'detail',
  data () {
    return {
    }
  },
  computed:{
    gid(){
       return this.$route.params.id
    }
  }
  
}
</script>


<style scoped>
.cont{
  font-size: 100px;
}
</style>
