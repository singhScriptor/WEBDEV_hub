const http = require("http")
// create routes 
const routes=require('./routes')

const server=http.createServer(routes)

const linkCode=3000
server.listen(linkCode,()=>{
    console.log("Server is listening")
})