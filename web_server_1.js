require('http').createServer(function(req, res){
    console.log(req.headers);


	res.writeHead(200,{'Content-Type':'text/html'});

    res.write('Hello');
    setTimeout(function(){
        res.end('world');
    }, 1000)

	// res.end('<h1>Hello world!</h1>');
}).listen(3000);