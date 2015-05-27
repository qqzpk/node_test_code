//模块依赖
var http = require('http');
var fs = require('fs');
var connect = require('connect');

//创建服务器
var server = connect.createServer();


//处理静态文件
server.use(connect.static(__dirname + '/website'));
/*var server = http.createServer(function (req, res) {
    if('GET' == req.method && '/img' == req.url.substr(0, 4) && '.jpg' == req.url.substr(-4)){
        fs.stat(__dirname + req.url, function(err, stat){
            if(err || !stat.isFile){
                res.writeHead(404);
                res.end('Not found');
                return;
            }
            serve(__dirname + req.url, 'application/jpg');
        });
    } else if('GET' == req.method && '/' == req.url){
        serve(__dirname + '/index.html', 'text/html');
    } else{
        res.writeHead(404);
        res.end('Not found!');
    }

    function serve(path, type){
        res.writeHead(200, {'Content-Type': type});
        fs.createReadStream(path).pipe(res);
    }
});*/



server.listen(3000);

server.use(connect.logger('dev'));

