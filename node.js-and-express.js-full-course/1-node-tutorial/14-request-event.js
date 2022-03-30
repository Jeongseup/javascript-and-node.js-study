const http = require('http')

// Using Event Emitter API
const server = http.createServer()

// EventEmitter -> net.Server -> http.Server.Evnets

//emits request event
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000, () => {
    console.log('Server Listening on port : 5000')
    console.log(`http://localhost:5000`)
})
