import axios from 'axios';
// axios.defaults.baseURL='http://localhost:3000';
//axios拦截器
axios.interceptors.response.use(function (response) {
   return response.data
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
//获取全部列表
export let getAll=()=>{
  return axios.get('/list')
}
//获取一个
export let getOne =(id)=>{
  return axios.get(`/list?id=${id}`) 
}
//获取分页接口
export let getPage=(page)=>{
  return axios.get(`/page?page=${page}`);
}
//首页所有数据获取完成 
export let getHome=()=>{
   return axios.all([getBanner(),getNew()])
}
//删除商品
export let deleteGood=(id)=>{
  return axios.delete(`/list?id=${id}`)
}
//修改商品
export let modifyGood=(id,data)=>{
    return axios.put(`/list?id=${id}`,data)
}
//添加商品
export let addNew =(good)=>{
   return axios.post('/list',good)
}
