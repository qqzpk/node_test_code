function Hello(){
	var name;

	this.setName = function(thyName){
		name = thyNname;
	};

	this.sayHello = function(){
		console.log('你好！' + name);
	};
}

// exports.Hello = Hello;
module.exports = Hello;