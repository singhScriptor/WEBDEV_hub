const express=require('express')
const app=express()
const port=3000

const orderRouter = require("./routes/orders")

const userRouter = require("./routes/users")


app.use("/orders",orderRouter)
app.use("/users",userRouter)

app.listen(port,()=>{
    console.log('server is listening')
})