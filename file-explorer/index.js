/*
 * Module dependencies
 */
var fs = require('fs'),
	stdin = process.stdin,
	stdout = process.stdout;

fs.readdir(process.cwd(), function(err, files){
	console.log('');

	if(!files.length){
		return console.log('\003[31m 没有文件显示！ \003[39m\n');
	}

	stdout.write('请选择你要查看的目录或文件：\n');

	var stats = [];
	function file(i){
		var filename = files[i];

		fs.stat(__dirname + '/' + filename, function(err, stat){
			stats[i] = stat;
			if(stat.isDirectory()){
				console.log('	'+ i +'		\033[36m '+ filename +'\003[39m');
			} else{
				console.log('	'+ i +'		\033[90m '+ filename +'\003[39m');
			}

			if(++i == files.length){
				read();
			} else{
				file(i);
			}
		});
	}

	function read(){
		console.log('');
		stdout.write('	\003[33m 输入你的选择：\033[39m');
		stdin.resume();
		stdin.setEncoding('utf8');
		stdin.on('data', option);
	}

	function option(data){
		var filename = files[Number(data)];

		if(!filename){
			stdout.write('	\003[31m 输入你的选择：\033[39m');
		}
		if(stats[Number(data)].isDirectory()){
			fs.readdir(__dirname + '/' + filename, function(err, files){
				console.log('');
				console.log('	（' + files.length + '个文件。）');
				files.forEach(function(file){
					console.log('	-   ' + file);
				});
				console.log('');
			});
		} else{
			// stdin.pause();

			fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data){
				console.log('');
				console.log('\003[90m' + data.replace(/(.*)/g, '	$1') + '\003[39m');
			});
		}
	}

	file(0);
});