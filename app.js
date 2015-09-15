var fs = require('fs');
var util = require('util');

var log_file = fs.createWriteStream('hist.log', {flags: 'w'});
var log_stdout = process.stdout;

//overload default console.log function to log to both debug.log and stdout
console.log = function(d){
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
}

var greetings = require('./greetings.js');
console.log(greetings.sayHelloInEnglish()); 

