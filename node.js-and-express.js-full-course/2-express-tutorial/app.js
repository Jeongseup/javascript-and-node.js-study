const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('user hit the server')
    // console.log(req.method, req.url)
    const url = req.url

    // home page
    if (url === '/') {
        // 헤더 정보
        // status를 잘못하더라도 전송이 가기는 감
        res.writeHead(200, { 'content-type': 'text/html' })
        // 바디 정보
        res.write('<h1>home page</h1>')
        res.end()

        // about pags
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>abut page</h1>')
        res.end()

        // 404 , not found request
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Not found</h1>')
        res.end()
    }
})

server.listen(5000, () => {
    console.log('http://localhost:5000')
})
