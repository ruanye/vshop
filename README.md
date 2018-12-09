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
vuex    
vue 组件 通过dispatch 提交到 actions  actions 通过 commit 触发 
mutations  mutatiosn 负责修改state
所有的组件就可以拿到state 进行渲染了 
actions 是异步的  store.dispatch 
mutations 是同步的  
如果是同步的话可以直接用store.commit
提交到 mutations   
只有mutations 能够修改state的状态
getters 是vuex的计算属性 计算state相关的值  相当于组件的computed 

####dispatch 和 commit的传参问题 ：
  `
  一个参数的时候可以直接传递，多个参数需要用对象传递  
  ` 
  方案一、
  this.$store.commit('addcount',{a:10,b:20})
  方案二、
  this.$store.commit({type:'addcount'a:10,
  b:20})
  type：为要提交的mutations函数 

mapState,mapGetters,mapMutations，mapActions  
辅助工具类
actions 需要注意的点
需要把commit通过解构赋值得到 通过commit
提交到mutations的同名函数
vuex书写了逻辑流程：
 1.先定义事件 (mutations-type.js)
 2.触发事件
 3.处理事件 处理state里面的数据 最后拿到数据
