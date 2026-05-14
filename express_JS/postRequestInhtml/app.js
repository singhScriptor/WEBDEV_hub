const express = require('express')

const app = express()

const port = 4000

const routesProduct=require('./routes/productRoutes')

app.use('/products',routesProduct)

app.use(express.json())

app.listen(4000,()=>{
    console.log(`server is listening...http://localhost:${port}`)
})