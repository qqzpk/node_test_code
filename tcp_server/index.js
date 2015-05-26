var net = require('net');
var count = 0,
    users = {};
var server = net.createServer(function(conn){
	conn.write(
        '\n> 欢迎来到GARY的第一个\033[90m TCP聊天程序。\033[90m'
        +'\n>现在有' + count +'个朋友也在聊天~ < '
        +'\n>请输入您的名字并按回车键：  ');
	count++;

    conn.setEncoding('utf8');
    var nickname;

    function broadcast(msg, exceptMyself){
        for(var i in users){
            if(!exceptMyself || !nickname){
                users[i].write(msg);
            }
        }
    }

    conn.on('data', function(data){
        data = data.replace('\r\n', '');

        if(!nickname){
            if(users[data]){
                conn.write('\033[93m  用户名已被使用，请换一个试试：\033[90m');
                return;
            } else{
                // 把第一个输入的数据当作用户名
                nickname = data;

                // 用用户名给客户端赋值
                users[nickname] = conn;

                //给每个客户端输出信息
                for(var i in users){
                    users[i].write('\033[93m  '+ nickname +'加入了聊天！\033[90m\n');
                }
            }
        } else{
            for(var i in users){
                //给除自己之外的客户端输出聊天信息
                if(i != nickname){
                    users[i].write('\033[96m  '+ nickname +'：\033[39m'+ data +'\n').toString('utf8');
                }
            }
        }
    });

	conn.on('close', function(){
		count--;
        delete users[nickname];
        broadcast('\033[90m >'+ nickname +'离开了聊天！\033[39m\n');
	});
});

server.listen(3000, function(){
	console.log('\033[90m   服务器正在监听：3000端口   \003[90m');
});