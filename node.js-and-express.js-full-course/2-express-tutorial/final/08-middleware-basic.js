const express = require('express')
const app = express()

// req => middleware => res

// 그냥 이렇게 미들웨어를 줘버리면 다음으로 안넘어감..
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log('logger : ', method, url, time)
    // res.send('Testing')
    // if i wanna pass the function?
    next()
}

app.get('/', logger, (req, res) => {
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
    console.log('http://localhost:5000')
})
