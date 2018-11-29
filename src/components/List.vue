<template>
  <div>
   <MHeader>列表</MHeader>
     <div class="content">
        <ul>
         <router-link  v-for="(item,index) in Alist" :key="index"
         :to="{name:'detail',params:{id:item.id}}" tag="li">
          <img :src="item.img" alt="">
          <div class="infobox">
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
            <p class="price">{{item.price}}$</p>
        </div>
        </router-link> 
        </ul>
      </div>
  </div>
</template>
<script>
import MHeader from '../base/MHearder'
import {getAll} from '../api'
export default {
  created(){
    this.getA()
  },
  data () {
    return {
      Alist:[]
    }
  },
  components:{
    MHeader
  },
  methods:{
   async getA(){
     let Alist = await getAll();
     this.Alist = Alist;
    }
  }
}

</script>
<style scoped>
.content{
  width: 100%;
  position: fixed;
  top:40px;
  bottom: 50px;
  overflow: scroll
}
li{
   margin: 10px 0;
   border-bottom:1px solid #e3e3e3;
  display: flex;
   padding-bottom: 10px;
}
.infobox{
 align-self: flex-end;
 margin-left: 10px
}
p{
  line-height: 30px;
}

.price{
  color: #ff0000;
}
</style>
