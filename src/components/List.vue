<template>
  <div>
   <MHeader>列表</MHeader>
     <div>
        <ul>
         <router-link  v-for="(item,index) in Alist" :key="index"
         :to="{name:'detail',params:{id:item.id}}" tag="li">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
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

</style>
