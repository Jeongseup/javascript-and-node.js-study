const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const first = readFileSync(
    path.resolve(__dirname, './content/first.txt'),
    'utf8'
)
const second = readFileSync(
    path.resolve(__dirname, './content/second.txt'),
    'utf8'
)

writeFileSync(
    path.resolve(__dirname, './content/result-sync.txt'),
    `Here is the result : ${first}, ${second}`,
    // 기존에 있던 텍스트에 이어서 쓴다
    { flag: 'a' }
)

console.log(first, second)
