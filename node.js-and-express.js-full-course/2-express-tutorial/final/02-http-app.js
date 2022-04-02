const { readFileSync } = require('fs')
const http = require('http')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    // console.log(req.method, req.url)
    const url = req.url
    // 모든 소스 요청은 결국에 get의 /sourePath 요청이 전달된다.
    // index.html에 ./style.css를 href로 링킹 해두었다면
    // /style.css 라는 get 요청이 서버로 전달된다.
    console.log(url)

    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()

        // about pags
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>abut page</h1>')
        res.end()

        // styles.css
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
        // imgae/logo
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    } else if (url === '/brower-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
        // 404
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Not found</h1>')
        res.end()
    }
})

server.listen(5000, () => {
    console.log('http://localhost:5000')
})
