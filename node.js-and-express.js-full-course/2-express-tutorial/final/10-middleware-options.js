// dependecies
const express = require('express')
const app = express()
const morgan = require('morgan')

// middelwares
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

// 1. use vs route
// 2. options - our own /express /third party(other lib)

// app.use([authorize, logger])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
    console.log('here?')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    // 미들웨어에서 생성한 객체도 전달된다
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
    console.log('http://localhost:5000')
})
