const express = require('express')

const app = express()

const port = 4000

const routesProduct=require('./routes/productRoutes')


app.use(express.json())
app.use(express.static('public'))


app.use('/products',routesProduct)


app.listen(4000,()=>{
    console.log(`server is listening...http://localhost:${port}`)
})