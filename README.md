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
ajax请求使用axios
npm install axios -s 
axios 是基于promise封装的 

export 会把当前模块的所有变量放在一个默认对象里导出
* as T 把变量都放在一个有命名(例如：T)对象里面  as后面是对象名字 *表示所有的
 import * as T from '../api'
 T.getBanner()
 路由需要传参的 要有name 
 redirect  重定向
 localhost:3000/list
 一页显示 5条   
 localhost:3000/list?page=1 
 1-5
 localhost:3000/list?page=2 
 6-10 
 axios.get(`list?page=${page}`)
 hasemore  是否有下一页 
 ref  获取原生dom/获取子组件的实例
 js节流和防抖  _.debounce __.throttle 
 keep-alive 缓存
 
 ```
 #缓存的放在这里
 <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/> 
</keep-alive>
#不缓存的放在这里
<router-view v-if="!$route.meta.keepAlive"/> 
```
路由传参  
1 params 
http://localhost:8080/#/detail/4

2 query 
http://localhost:8080/#/detail?id=4
