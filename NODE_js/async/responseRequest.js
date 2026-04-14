const http= require('http')

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');

    if(req.url === '/'){
        res.end('<h1>Hello World</h1>')
    }
    else if(req.url === '/pizza'){
        res.end('<h1>This is your pizza</h1>')
    }
    else if(req.url === '/about'){
        res.end('<h1>Welcome to my About us </h1>')
    }
    else if(req.url === '/node'){
        res.end('<h1>Welcome to my Node Js project</h1>');

    }
    else{
        res.end('<h1>Page Not Found</h1>')
    }
})
let port=3000
server.listen(port,()=>{
    console.log('Server is listening on port 3000')
})

