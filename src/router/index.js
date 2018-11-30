import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Car from '../components/Car'
import List from '../components/List'
import My from '../components/My'
import Detail from '../components/Detail'
Vue.use(Router)
export default new Router({
  routes: [ 
    {path:'/',redirect:'/home'},
    {path: '/home',component: Home},
    {path: '/car',component: Car},
    {path: '/list',component: List},
    {path: '/my',component: My},
    {name:'detail',path: '/detail/:id',component:Detail},
    {path:'/*',redirect:'/home'}
  ]
})
