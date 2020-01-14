var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.raw({ type:'*/*' }));

app.post('/', function(req, res) {
  console.log(req.body);
  res.end();
});
app.listen(8080);
