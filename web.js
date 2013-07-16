var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

var tx = fs.readFileSync('index.html');
var t = tx.toString('utf-8')

app.get('/', function(request, response) {
  response.send(t);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
