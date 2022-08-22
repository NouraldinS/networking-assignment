var express = require('express')
require('./ws')

// Initialize Server
var app = express()

// Serve ws.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/ws.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})