var http = require('http');
var qs = require('querystring');

http.createServer(function(req, res){
    var body = '';
    req.on('data', function(chunk){
        body += chunk;
    });

    req.on('end', function () {
        res.writeHead(200);
        res.end('完成！');
        console.log('\n 得到名字：\003[90m' + qs.parse(body).name + '\033[39m\n');
    });
}).listen(3000);
