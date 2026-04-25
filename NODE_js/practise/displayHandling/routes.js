const fs=require('fs')

const handleRequest=(req,res)=>{
    const url=req.url

    if(url === "/message"){
        let body=[]
        req.on('data',chunks=>{
            body.push(chunks)
        })
        req.on('end',()=>{
            let buffer=Buffer.concat(body)
            let bufferValue=buffer.toString()
            let value=bufferValue.split('=')[1]

            fs.writeFile('message.txt',value,()=>{
                res.statusCode=302
                res.setHeader('Location','/')
                res.end()
            })
        })
    }
    else if(url === '/read'){
        fs.readFile('message.txt',(err,data)=>{
            res.setHeader("Content-type","text/html")
            if(!err){
                res.end(`<h1>${data}</h1>`)
            }
            else{
                res.end("<h1>No Message</h1>")
            }
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
}

exports.handleRequest=handleRequest;