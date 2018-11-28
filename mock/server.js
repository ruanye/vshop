let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./slider');
http.createServer((req,res)=>{
  //设置哪个域名可以跨域
  res.setHeader('Access-Control-Allow-Origin','*');
  let {pathname,query}= url.parse(req.url,true);
 if(pathname==='/slider'){
     res.setHeader('content-type','text/json;charset=utf8')
     return res.end(JSON.stringify(sliders))
  }
  res.end('404')
}).listen(3000)