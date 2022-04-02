const express = require('express')
// 호출
const app = express()

// express 객체가 지원하는 api들
// app.get
// app.post
// app.put
// app.delete
// 위의 요청들은 HTTP METHOD와 매칭

// app.all : 모든 요청
// app.use : 미들웨어와 같은.. etc
// app.listen : http.listen과 똑같음

app.get('/', (req, res) => {
    console.log('user hit the resource')
    // 난 왜 여기서 200으로
    res.status(200).send('Home Page') // basic status : 304, OK
    console.log(res)
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
    console.log('http://localhost:5000')
})
