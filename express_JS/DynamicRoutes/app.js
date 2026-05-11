const express=require('express')
const app=express()
const port = 3000

app.get('/welcome/:username',(req,res)=>{
    const name = req.params.username
    const role = req.query.role || "Guest"

    res.send(`welcome ${name}, your role is ${role}`)

})

app.listen(port, () => {
    console.log(`Server running. Click here: http://localhost:${port}/welcome/Dhiraj?role=Developer`);
});