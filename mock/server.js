let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./slider');
function read(cb){
  fs.readFile('./good.json','utf8',(err,data)=>{
    if(err){//文件错误或者没长度 
       console.log(err)
      cb([]) 
    }else{
      cb(JSON.parse(data))
    }
  })
}
http.createServer((req,res)=>{
  //设置哪个域名可以跨域
  res.setHeader('Access-Control-Allow-Origin','*');
  let {pathname,query}= url.parse(req.url,true);
  //轮播图接口 
 if(pathname==='/slider'){
     res.setHeader('content-type','text/json;charset=utf8')
     return res.end(JSON.stringify(sliders))
  }
  //首页列表接口
 if(pathname==='/new'){
    res.setHeader('content-type','text/json;charset=utf8');
    read((data)=>{
       let newlist = data.reverse().slice(0,6);
        res.end(JSON.stringify(newlist)) 
    })
    return
  }
   //http://localhost:3000/list?id=4
  
   //列表页接口
   if(pathname==='/list'){
      let id =parseInt(query.id);
      res.setHeader('content-type','text/json;charset=utf8');
       read((data)=>{
         if(id){
          let good = data.find(item=>item.id===id)
           res.end(JSON.stringify(good))
         }else{
          res.end(JSON.stringify(data))
         }
      })
     return
   }
  res.end('404')
}).listen(3000,()=>{
  console.log('3000启动成功')
})