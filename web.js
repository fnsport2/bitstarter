var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.use('/bootstrap',express.static(__dirname + '/bootstrap'));

app.get('/', function(request, response) {
  var string = new Buffer(fs.readFileSync("index.html"));
  response.send(string.toString());
});

//var port = process.env.PORT || 5000;
// (Felix) changing port to 8080
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
