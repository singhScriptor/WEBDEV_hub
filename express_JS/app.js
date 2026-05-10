const express =require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("output from middleWare 1")
    next()
})

app.use((req,res,next)=>{
    console.log("output from middleWare2")
    res.send("<h1>Hello middleWare</h1>")
})

app.listen(3000)