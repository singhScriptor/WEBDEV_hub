const http=require('http')
const server=http.createServer((req,res)=>{
    console.log("Server is created")
})
let port=3000
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})

setTimeout(()=>{
    server.close(()=>{
        console.log("Server has been closed")
    })
},5000)