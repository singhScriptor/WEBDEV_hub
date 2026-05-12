const express=require('express')
const app=express()
const port=3000

const bookRouter = require('./Routes/books')


app.use(express.json())

app.use("/books",bookRouter)



app.listen(port,()=>{
    console.log(`app is listening at port : http://localhost:${port}`)
})
