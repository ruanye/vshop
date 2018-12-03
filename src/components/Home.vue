<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="container">
      <Loading v-if="load"></Loading>
      <template v-else>
        <Swiper :swiperSlides="slider"></Swiper>
      <div>
        <ul>
          <li v-for="(newItem,index) in list" :key="index">
             <img :src="newItem.img" alt="">
            <p>{{newItem.name}}</p>
          </li>
        </ul>
      </div>
     </template>
    </div> 
  </div>
</template>

<script>
import MHeader from '../base/MHearder'
import Swiper from '../base/Swiper'
import Loading from '../base/Loading'
import {getHome} from '../api'
export default {
   data () {
    return {
      slider:[],
      list:[],
      load:true
    }
  },  
  created(){
     this.getHomeList()
   },
   components:{
    MHeader,
    Swiper,
    Loading
  },
  methods:{
   async getHomeList(){
      [this.slider,this.list]=  await getHome();
      this.load= false;
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
