import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Car from '../components/Car'
import List from '../components/List'
import My from '../components/My'

Vue.use(Router)

export default new Router({
  routes: [ 
    {path: '/home',component: Home},
    {path: '/car',component: Car},
    {path: '/list',component: List},
    {path: '/my',component: My}
  ]
})
