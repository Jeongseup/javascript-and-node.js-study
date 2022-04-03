const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res
app.use([logger, authorize])

// use 위치 아래의 api만 적용된다
// app.use('/api', logger)

// 미들웨어를 이렇게 계속 쌓으면 boilerplate
app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
    console.log('http://localhost:5000')
})
