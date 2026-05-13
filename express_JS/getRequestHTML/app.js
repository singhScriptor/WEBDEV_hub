const express = require('express')

const app = express()

const port = 4000

const productRoutes =require('./routes/products')

app.use('/products',productRoutes)

app.listen(port,()=>{
    console.log(`app is listening at : http://localhost:${port}`)
})