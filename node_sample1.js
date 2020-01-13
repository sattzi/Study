var http = require('http');
var server = http.createServer(function(req, res) {
  res.write("Hello World!\n");
  res.end();
}).listen(8080);
