
var _mod = function(){};

_mod.prototype.createClient = function(port, host){
  var redis = require('redis');
  var redisClient = redis.createClient(port, host);
  client.on('connect', function(){
    console.log('connected');
  });
}
modules.export = new _mod();


