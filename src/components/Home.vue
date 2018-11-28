<template>
  <div>
    <MHeader >首页</MHeader> 
    <Swiper></Swiper>
  </div>
</template>

<script>
import MHeader from '../base/MHearder'
import Swiper from '../base/Swiper'
import {getBanner} from '../api'
export default {
 async created(){
     await getBanner()
   },
  data () {
    return {
    }
  },
  components:{
    MHeader,
    Swiper
  }
}
</script>


<style scoped>

</style>
