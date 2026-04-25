const http=require('http')

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')

    if(req.url === '/'){
        res.end("<h1>Hey World</h1>")
    }
    else if(req.url === '/pizza'){
        res.end("<h1>This is your pizza</h1>")
    }
    else if(req.url === '/home'){
        res.end("<h1>Welcome home</h1>")
    }
    else if(req.url === '/about'){
        res.end("<h1>Welcome to About Us</h1>")
    }
    else if(req.url === '/node'){
        res.end("<h1>Welcome to my Node js project</h1>")
    }
    else {
        res.end("<h1>Page Not Found</h1>")
    }
})
let host=3000
server.listen(host,()=>{
    console.log(`server is listening ${host}`)
})
