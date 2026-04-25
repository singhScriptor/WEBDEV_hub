const http = require("http")
const fs=require('fs')
const server = http.createServer((req,res)=>{
    const url=req.url

    if(url === '/message'){
        let body=[]
        req.on('data',chunks=>{
            body.push(chunks)
        })
        req.on('end',(err)=>{
            const buffer=Buffer.concat(body)
            const value=buffer.toString()
            const resValue=value.split("=")[1]
            fs.writeFile("message.txt",resValue,err=>{
                res.statusCode=302
                res.setHeader('Location','/')
                res.end()
            })
        })
    }
    else{
        
        res.setHeader("Content-Type","text/html")
        res.end(`
            <form action="/message" method="post">
            <label>Name:</label>
            <input type="text" name="username">
            <button type="submit">Submit</button>
            </form>
        `)
    } 
})

server.listen(3000,()=>{
    console.log("Server is listening")
})