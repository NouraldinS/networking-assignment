var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 40510 })

// Listen for websocket connection
wss.on('connection', function (ws) {

  // Listen for websocket message
  ws.on('message', function (message) {

    // Convert message buffer to string
    const messageString = message.toString();

    // Send back uppercased message
    ws.send(messageString.toUpperCase())

    // Push log to console
    console.log('received: %s', JSON.stringify(message), message.toString())
  })
})