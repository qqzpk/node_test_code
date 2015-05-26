var name;

exports.setName = function(thisName){
	name = thisName;
};

exports.sayHello = function(){
	console.log("你好！" + name + "\n" + "fuck");
};