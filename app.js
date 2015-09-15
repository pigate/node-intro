var fs = require('fs');
var util = require('util');
var bar = require('./foo.js');

var log_file = fs.createWriteStream('hist.log', {flags: 'a'});
var log_stdout = process.stdout;

//overload default console.log function to log to both debug.log and stdout
console.log = function(d){
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
}

foo();
bar(); //bar gets the anonymous function from exporting
