var express = require('express');
var app = express();
app.listen(8080);

app.get('/test1', function(req, res) {
  res.send('TEST1\n');
});

app.post('/test2', function(req, res) {
  res.send('TEST2\n');
});
