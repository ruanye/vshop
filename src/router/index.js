import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [ 
    {path:'/',redirect:'/home'},
    {path: '/home',component:()=>import('../components/Home'),meta:{
      keepAlive:true
    }},
    {path: '/demo',component:()=>import('../components/DemoVx')},
    {path: '/car',component: ()=>import('../components/Car')},
    {path: '/list',component:()=>import('../components/List')},
    {path: '/my',component: ()=>import('../components/My')},
    {name:'detail',path: '/detail',component:()=>import('../components/Detail')},
    {path:'/*',redirect:'/home'}
  ]
})
