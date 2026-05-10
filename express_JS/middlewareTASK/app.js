const express = require('express')

const app = express()

app.use((req,res,next)=>{
    req.user = "Guest"
    next()
})

app.use('/welcome',(req,res,next)=>{
    res.send(`<h1>Welcome, ${req.user}!</h1>`)
})

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000/welcome")
})
