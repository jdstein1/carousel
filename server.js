var express = require('express');
var app = express();
var path = require('path');

// console.log('__dirname: ', __dirname);

// Define the port to run on
app.set('port', 3000);

// app.use(express.static(path.join(__dirname,'src')));
app.use(express.static('src'));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
