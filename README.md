# vshop

> a vuejs project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
# 目录结构 
  . mock  这个文件夹是放数据的  
  . src
     .api  这个是放所有请求的 
     .components 这个放页面级组件
     .base       这个放公用组件 
     .router     路由
     .assets     静态文件
     .vuex/store 放vuex(用的时候创建)
组件引入步骤 
   1. 引入 
   2. 注册
   3. 用标签形式使用 
使用less  
  npm install less less-loader
使用sass 
  npm install node-sass sass-loader
路由激活样式：
router-link-exact-active router-link-active
通过slot插槽来解决头部显示问题
通过props传值控制返回箭头是否显示
v-show  v-if 
v-show  有没有都会渲染  display:none
