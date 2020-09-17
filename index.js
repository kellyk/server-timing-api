var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var options = {
  setHeaders: function (res, path, stat) {
    res.set('Server-Timing', 'asset;desc="Static asset";dur=100')
  }
}
app.use(express.static(path.join(__dirname, 'public'), options));

app.get('/api', function (req, res) {
  res.set('Server-Timing', 'route;desc="Route";dur=200')
  res.send('hello');
});

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});
