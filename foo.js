// v0
foo = function(){
  console.log('Foo!');
}

//export anonymous function
//when require('module_name'), returns this function
module.exports = function(){
  console.log('bar');
}
