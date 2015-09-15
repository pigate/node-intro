//exports is the same thing as module.exports
//var exports = module.exports = {}

var _module = function(){
  var sayHelloInEnglish = function(){
    return "Hello";
  }
  var sayHelloInSpanish = function(){
    return "Hola";
  }
}
_module.prototype.log = function(){
    console.log("greetings!");
}

module.exports = new _module();
