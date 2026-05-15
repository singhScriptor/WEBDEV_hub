const express = require('express')

const app = express()

const port = 3000

const routesProduct = require('./routes/productRoutes')

const routesUsers = require('./routes/userRoutes')

const routesCart = require('./routes/cartRoutes')


app.use(express.json())

app.use('/products',routesProduct)
app.use('/cart',routesCart)
app.use('/users',routesUsers)

app.listen(port,()=>{
    console.log(`server is listening at : http://localhost:${port}`)
})
