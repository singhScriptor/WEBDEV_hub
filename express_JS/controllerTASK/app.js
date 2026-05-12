const express = require('express')

const app = express()

const port = 3000


const productRoutes = require('./routes/products')

app.use('/products',productRoutes)




app.listen(port,()=>{
    console.log(`server is listening at : http://localhost:${port}`)
})