var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.send('hello world')
})

app.get('')

app.listen(port, function() {
  console.log("Listening on port... " + port);
})
