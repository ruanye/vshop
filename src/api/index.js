import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000';
//axios拦截器
axios.interceptors.response.use(function (response) {
   return response.data;
  }, function (error) {
    return Promise.reject(error);
});
//axios 返回的是promise
//获取轮播图
export let  getBanner =()=>{
   return axios.get('/slider')
}
//获取首页列表
export let getNew=()=>{
  return axios.get('/new')
}

