<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="container">
      <Swiper :swiperSlides="slider"></Swiper>
    </div> 
  </div>
</template>

<script>
import MHeader from '../base/MHearder'
import Swiper from '../base/Swiper'
import {getBanner,getNew} from '../api'
export default {
   data () {
    return {
      slider:[],
      list:[]
    }
  },
   async created(){
    let slider =  await getBanner();
    this.slider =slider;
    let list = await getNew();
    this.list=list;
   },
   components:{
    MHeader,
    Swiper
  }
}
</script>


<style scoped>
.container{
  position: relative;
  top:40px;
  margin-bottom: 80px;
}
</style>
