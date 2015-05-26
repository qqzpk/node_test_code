var http = require('http');

http.createServer(function(req, res){
    if('/' == req.url){
        res.writeHead('200',{
           'Content-Type': 'text/html'
        });

        res.end([
            '<form method="post" action="url">',
            '<h1>我的表单</h1>',
            '<fieldset>个人信息',
            '<label>名字：</label>',
            '<input type="text" name="name"/>',
            '<p><button>提交</button></p>',
            '</fieldset>',
            '</form>',
            req.url
        ].join('').toString('utf8'));
    } else if('/url' == req.url){
        res.writeHead('200',{
            'Content-Type': 'text/html'
        });
        res.end('你发送了'+ req.method +'请求。')
    }
}).listen(3000);