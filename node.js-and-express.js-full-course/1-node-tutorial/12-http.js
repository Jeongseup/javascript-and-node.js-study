const http = require('http')

const server = http.createServer((req, res) => {
    // giant object about req info
    // console.log(req)

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

server.listen(3000)
