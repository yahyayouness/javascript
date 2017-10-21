(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
}());


var obj = {name:'MARTIN',firstname:'Jean'};

(function (d) {
  var dep = d;

}(obj));




var obj = {name:'MARTIN',firstname:'Jean'};

var le_module = (function (d) {
  var dep = d;
  var innerObj = {};

  innerObj.sayHello=function(){
    return "Hello";
  };

  return innerObj;
}(obj));

var s =le_module.sayHello();
console.log(s);


define('le_module', ['module1'], function (module1) {

  var dep = module1;
  var innerObj = {};

  innerObj.sayHello=function(){
    return "Hello";
  };

  return innerObj;
});
