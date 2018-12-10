<template>
  <div>
    <ul class="carlist">
      <li v-for="(item,index) in goodlist" :key="index">
          <label class="check-box" for="check">
            <input @change="changchecked(item)" type="checkbox" v-model="item.sele">
           {{item.sele}}
          </label>
         <img :src="item.img" alt="">
         <div>
           <p>{{item.name}}</p>
           <p>{{item.info}}</p>
           <p>{{item.price}}</p>
           <p>{{item.count}}</p>
        </div>
         
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapState(['goodlist'])
  },
  methods:{
    changchecked(item){
     }
  }
}
</script>


<style lang="less" scoped>
.check-box{
  display: flex;
  justify-content: center;
  align-items: center;
  input{
    margin:0 10px;
    -webkit-appearance:none;
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid  #e3e3e3;
    border-radius: 5px;
    outline: none;
   }
   input:checked:before{
     content: '';
     display: inline-block;
     border: 1px solid green;
     border-top-width: 0;
     border-right-width: 0; 
     width: 12px;
     height: 8px;
     transform: rotate(-50deg);
     position:relative;
     left: 2px;
   }
}
.carlist{
  display: flex;
  flex-direction: column;
  li{
    display: flex;
  }
}
</style>
