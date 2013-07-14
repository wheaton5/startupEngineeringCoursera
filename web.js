var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var json = '';
  var str = fs.readFileSync('index.html', function(err,data){
	if(err) throw err;
	
  json = JSON.stringify(data);
});

  
  response.send(json);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
