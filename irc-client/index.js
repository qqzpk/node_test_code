var net = require('net');
var client = net.connect(6667, 'irc.freenode.net');

client.setEncoding('utf8');

client.on('connect', function(){
    client.write('NICK gary\r\n');
    client.write('USER gary 0 * : 关林\r\n');
    client.write('JOIN #node.js\r\n');
})