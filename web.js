var express = require('express');

var app = express.createServer(express.logger());

var text = fs.readFileSync('index.html');
text.toString('utf8');


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});