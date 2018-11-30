<template>
  <div class="cont">
    <MHeader :showArrow="true">详情页</MHeader>
    <div class="formbox">
      <label for>名称
        <br>
        <input type="text" v-model="good.name">
      </label>
      <label for>简介
        <br>
        <input type="text" v-model="good.info">
      </label>
      <label for>图片
        <br>
        <input type="text" v-model="good.img">
      </label>
      <label for>价格
        <br>
        <input type="text" v-model="good.price">
      </label>
    </div>
  </div>
</template>

<script>
import MHeader from "../base/MHearder";
import { getOne } from "../api";
export default {
  name:'detail',
  created() {
    this.getGood();
  },
  name: "detail",
  data() {
    return {
      good: {}
    };
  },
  components: {
    MHeader
  },
  computed: {
    gid() {
      return this.$route.params.id;
    }
  },
  methods: {
    async getGood() {
      let good = await getOne(this.gid);
      this.good = good;
    }
  }
};
</script>


<style scoped>
.cont {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
}
label {
  display: block;
  width: 80%;
  padding: 20px auto;
}
.formbox{
  position: relative;
  top:60px
}
input {
  display: block;
  width: 100%;
  margin-top: 20px;
  outline: none;
  border: 1px solid #eee;
}
</style>
