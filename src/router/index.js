import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [ 
    {path:'/',redirect:'/home'},
    {path: '/home',component:()=>import('@/components/Home'),meta:{
      keepAlive:true
    }},
    {path: '/car',component: ()=>import('_c/Car')},
    {path: '/list',component:()=>import('../components/List')},
    {path: '/my',component: ()=>import('../components/My')},
    {name:'detail',path: '/detail',component:()=>import('../components/Detail')},
    {path:'/*',redirect:'/home'}
  ]
})
