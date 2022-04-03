const express = require('express')
const app = express()
const { people, products } = require('./data.js')

app.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <a href="/api/products">products</a>`)
    // res.json(products)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    //  res send
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    console.log(productID)

    const singleProduct = products.find(
        // JSON은 기본적으로 string 타입이므로 Number로 타입변환이 필요함
        (product) => product.id === Number(productID)
    )

    // undefined가 false니까 !undefined  는 true
    if (!singleProduct) {
        //  If user type the wrong id, send error msg
        return res.status(404).send('Product Does Not Exsist')
    }

    res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello wordl')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query

    // deep copy
    let sortedProducts = [...products]

    // 만약 search값이 존재하면
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    // 만약 limit 값이 존재하면
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('No Prdocut matched your search')
        return res.status(200).json({ success: true, data: [] })
    }

    res.status(200).json({ success: true, data: sortedProducts })
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
    console.log('http://localhost:5000')
})
