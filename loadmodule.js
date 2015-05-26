var hello1 = require('./module');
hello1.setName('Vivian');

var hello2 = require('./module');
hello2.setName('Nike');

hello1.sayHello();
hello2.sayHello();