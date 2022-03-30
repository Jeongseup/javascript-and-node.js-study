const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt', {
    // encoding: 'utf8',
    highWaterMark: 90000
})

// 용량
// default 64kb (65486 bytes)
// last buffer - remainder

// highWaterMark - control size
// ex) from 64kb to 90kb

stream.on('data', (result) => {
    // reading 64 more bytes..
    console.log(result)
})

stream.on('error', (err) => console.log(err))
