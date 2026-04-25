const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url 

    res.setHeader("Content-Type","text/html")

    if(url === '/'){
        res.end(`<h1>Welcome to the Server</h1>`)
    }
    else if(url === '/home'){
        res.end(`<h1>Welcome Home</h1>`)
    }
    else if(url === '/about'){
        res.end(`<h1>Want to know about us!</h1>`)
    }
    else if(url === '/copyright'){
        res.end(`<h1>&copy Dhiraj Singh</h1>`)
    }
    else{
        res.end(`<h1>Page not found</h1>`)
    }
})

server.listen(3000,()=>{
    console.log("server is listening")
})
