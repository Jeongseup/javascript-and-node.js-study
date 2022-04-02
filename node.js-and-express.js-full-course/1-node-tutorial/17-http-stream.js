const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    // 파일 통으로 보냄
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')

    fileStream.on('open', () => {
        // file chunk == pipe
        fileStream.pipe(res)
    })

    fileStream.on('error', () => {
        res.end(err)
    })
}).listen(5000)
