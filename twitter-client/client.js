var http = require('http');
var qs = require('querystring');

var search = process.argv.slice(2).join(' ').trim();

if(!search.length){
    return console.log('\n 用法: node tweets <search term> \n');
}

console.log('\n 正在搜索：\033[96m' + search + '\033[39m\n');

http.request({
    host: 'https://api.twitter.com',
    path: '/1.1/search/tweets.json?q=' + qs.stringify({q: search}),
    method: 'GET'
}, function (res){
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        body += chunk;
    });

    // console.log(res.url);

    res.on('end', function () {
        var obj = JSON.parse(body);
        obj.results.forEach(function(tweet){
            console.log(tweet.text);
            console.log(tweet.from_user);
            console.log('--');
        });
    });

    res.on('error', function (err) {
        console.log(err);
    });


}).end();

