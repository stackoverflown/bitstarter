var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var out = buf.toString( fs.readFileSync('./index.html'));
  console.log(out);
  response.send(out);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
