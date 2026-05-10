const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('output from middleware 1')
    next()
})
app.use((req,res,next)=>{
    console.log('output from middleware 2')
    res.send(`<h1>HELLO - WORLD</h1>`)
})

app.listen(3000,()=>{
    console.log("Express server is listening...!")
})