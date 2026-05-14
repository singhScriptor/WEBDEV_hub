const express = require ('express')

const port = 4000

const app = express()

let productRouter = require('./routes/productroutes')

app.use('/products',productRouter)

app.listen(port,()=>{
    console.log(`server is listening at... http://localhost:${port}`)
})