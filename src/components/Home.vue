<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="container">
      <Swiper :swiperSlides="slider"></Swiper>
      <div>
        <ul>
          <li v-for="(newItem,index) in list" :key="index">
             <img :src="newItem.img" alt="">
            <p>{{newItem.name}}</p>
          </li>
        </ul>
      </div>
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
  created(){
    this.getImgList();
    this.getNewList();
   },
   components:{
    MHeader,
    Swiper
  },
  methods:{
   async getImgList(){
       let slider =  await getBanner();
       this.slider =slider;
    },
   async getNewList(){
      let list = await getNew();
      this.list=list;
   }
  }
}
</script>
<style scoped lang="less">
.container{
  padding: 0 10px;
  position: relative;
  top:40px;
  margin-bottom: 80px;
}
ul{
  display: flex;
   flex-wrap: wrap;
}
li{
  width: 45%;
  margin: 2%;
  img{
    width: 100%;
  }
  p{
    text-align: center;
  }
}
</style>
