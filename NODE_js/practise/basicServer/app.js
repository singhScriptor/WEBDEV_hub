const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.end(`<h1>Server is Running</h1>`)
})

server.listen(3000,()=>{
    console.log("Server is Listening")
})