const http = require('http')

const server = http.createServer((req, res) => {
    // giant object about req info
    // console.log(req)
    console.log('request event')

    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Here is about page')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <a href='/'>back home</a>
        `)
    }
})

server.listen(3000, () => {
    console.log('Server listening on port : 3000 ...')
})
