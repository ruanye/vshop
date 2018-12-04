let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./slider');

function read(cb) {
  fs.readFile('./good.json', 'utf8', (err, data) => {
    if (err) { //文件错误或者没长度 
      console.log(err)
      cb([])
    } else {
      cb(JSON.parse(data))
    }
  })
}

function write(data, cb) {
  fs.writeFile('./good.json', JSON.stringify(data), 'utf8', cb)
}

let offset = 5; //每一页的数据是5条
http.createServer((req, res) => {
  //设置哪个域名可以跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //允许哪个方法可以跨域
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  //如果是OPTIONS 直接返回成功
  if (req.method == 'OPTIONS') return res.end('200')

  let {
    pathname,
    query
  } = url.parse(req.url, true);
  //轮播图接口 
  if (pathname === '/slider') {
    res.setHeader('content-type', 'text/json;charset=utf8')
    return res.end(JSON.stringify(sliders))
  }
  //首页列表接口
  if (pathname === '/new') {
    res.setHeader('content-type', 'text/json;charset=utf8');
    read((data) => {
      let newlist = data.reverse().slice(0, 6);

      res.end(JSON.stringify(newlist))

    })
    return
  }
  //http://localhost:3000/list?id=dddd

  //列表页接口
  if (pathname === '/list') {
    let id = parseInt(query.id);
    console.log(req.method, '请求方式');
    switch (req.method) {
      case 'DELETE':
        if (id) {
          read(data => {
            //把不等于传递过来的id的值变成一个新的data
            data = data.filter(item => item.id !== id)
            //把新的数据重新写会到json文件里
            write(data,() => {
              res.end(JSON.stringify({}))
            })
          })
        }
        break;
    }

    res.setHeader('content-type', 'text/json;charset=utf8');
    read((data) => {
      if (id) {
        let good = data.find(item => item.id === id)
        if (good) {
          res.end(JSON.stringify(good))
        } else {
          res.end(JSON.stringify({}))
        }
      } else {
        res.end(JSON.stringify(data))
      }
    })
    return
  }
  //分页接口 
  //localhost:3000/page?page=1
  if (pathname === '/page') {
    res.setHeader('content-type', 'text/json;charset=utf8');
    let page = parseInt(query.page);
    if (!page) {
      page = 1;
    }
    page = page - 1;

    //默认有下一页
    let hasmore = true;
    read((data) => {

      //offset 每次5条 
      let pagedata = data.slice(page * offset, page * offset + offset);
      let lastindex = page * offset + offset;
      //如果当前最后的索引大于data的长度，则表示没有数据了 
      if (lastindex > data.length) {
        hasmore = false;
      }

      res.end(JSON.stringify({
        data: pagedata,
        hasmore
      }));


    })
    return
  }
  res.end('404')
}).listen(3000, () => {
  console.log('3000启动成功')
})
