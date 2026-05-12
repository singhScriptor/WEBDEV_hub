const express= require('express')

const app = express()

const port = 3000

const homeRoute = require('./routes/home')

const studentRoute = require('./routes/student')

const courseRoute = require('./routes/course')

app.use(express.json())

app.use('/home',homeRoute)
app.use('/student',studentRoute)
app.use('/course',courseRoute)

app.use((req,res)=>{
    res.status(404).send("Page not found" )
})


app.listen(port,()=>{
    console.log(`app is listening...at : http://localhost:${port}`)
})
