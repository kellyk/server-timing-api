var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var options = {
  setHeaders: function (res, path, stat) {
    res.set('Server-Timing', 'miss, db;dur=53, app;dur=47.2')
  }
}
app.use(express.static(path.join(__dirname, 'public'), options));

app.get('/api', function (req, res) {
  res.set('Server-Timing', 'cache;desc="Cache Read";dur=23.2')
  res.send('hello');
});

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});
