import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
//懒加载
// Vue.use(VueLazyload,{
//   preLoad: 1.3,
//   error:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1413077699,3256757355&fm=26&gp=0.jpg',
//   loading:'http://img.lanrentuku.com/img/allimg/1212/5-121204193951.gif',
//   attempt: 1
// })
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
