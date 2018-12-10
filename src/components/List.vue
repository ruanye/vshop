<template>
  <div>
    <MHeader ref="mheader">列表</MHeader>
    <div class="content" ref="scroll" @scroll="sload">
      <ul>
        <router-link
          v-for="(item,index) in Alist"
          :key="index"
          :to="{name:'detail',query:{id:item.id}}"
          tag="li"
        >
        <img :src="item.img" alt>
          <div class="infobox">
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
            <p class="price">{{item.price}}$</p>
          </div>
          <div class="btngroup">
            <button @click.stop="addCar(item)">添加</button>
            <button @click.stop="dele(item.id)">删除</button>
          </div>
        </router-link>
      </ul>
      <div class="center-block">
        <button @click="loadMore">{{hasmoretext}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import MHeader from "../base/MHearder";
import { getPage,deleteGood} 
from "../api";
import * as Types from '../store/mutations-types.js'

export default {
  created() {
    this.getA();
  },
  data() {
    return {
      page: 1,
      Alist: [],
      hasmore: true,
      hasmoretext: "点击加载更多"
    };
  },
  mounted() {
    //console.log()
  },
  components: {
    MHeader
  },
  methods: {
    //添加商品到购物车
    addCar(good){
      this.$store.commit({
         type:Types.ADD_CAR,
         good
       })
       },
    //删除商品
   async dele(deleId){
        await deleteGood(deleId);
        this.Alist = this.Alist.filter(item=>item.id!==deleId)
    },
    //滚动事件
    sload() {
       clearTimeout(this.timer);
       this.timer = setTimeout(() => {
       let { scrollTop, clientHeight, scrollHeight } = this.$refs.scroll;
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.loadMore()
        }
      },13);
    },
    //获取分页数据
    async getA() {
      let { data: Alist, hasmore } = await getPage(this.page);
      //合并已经拿到的数据和新请求的数据
      this.Alist = [...this.Alist, ...Alist];
      this.hasmore = hasmore;
      if (!hasmore) {
        //如果this.hasmore 为false,表示没有下一页了
        this.hasmoretext = "没有更多了";
      }
    },
    //加载更多
    loadMore() {
      if (this.hasmore) {
        this.page += 1;
        this.getA();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.btngroup{
  display: flex;
  button{
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 0 10px;
    background-color:chocolate;
    color:#fff;
    font-size: 14px;
  }
}
.center-block {
  text-align: center;
}
button {
  display: inline-block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background-color: yellowgreen;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
}
.content {
  width: 100%;
  position: fixed;
  top: 40px;
  bottom: 50px;
  overflow: scroll;
}
li {
  margin: 10px 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  padding-bottom: 10px;
}
.infobox {
  align-self: flex-end;
  margin-left: 10px;
}
p {
  line-height: 30px;
}

.price {
  color: #ff0000;
}
</style>
