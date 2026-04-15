const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method

    if(url === '/'){
        res.setHeader('Content-Type','text/html')
        res.end(`
            <form action="/message" method="POST">
            <label>Name:</label>
            <input type="text" name="name">
            <button type="submit">Submit</button>
            </form>
        `)
    }
    else{
        if(req.url==='/message'){

            let dataChunks=[]
            req.on('data',(chunks)=>{
                console.log(chunks)
                dataChunks.push(chunks)
            })

            req.on('end',()=>{
                // let combinedBuffer=Buffer.concat(dataChunks)
                // console.log(combinedBuffer.toString())
                // let value=combinedBuffer.toString().split(",")
                // console.log(value)
                let buffer=Buffer.concat(dataChunks)
                console.log(buffer)

                let formData=buffer.toString()
                console.log(formData)

                const formValues=formData.split('=')[1]
                const fs=require('fs')
                fs.writeFile('formValues.txt',formValues,(err)=>{
                    res.statusCode=302; // redirected
                    res.setHeader('location','/')
                    res.end()
                })
            })
        }
        else{
            if(req.url==="/read"){
                const fs=require('fs')
                fs.readFile('formValues.txt',(err,data)=>{
                    console.log(data.toString())
                    res.end(`<h1>${data.toString()}</h1>`)
                })
            }
        }
    }
})
server.listen(3000,()=>{
    console.log('server is listening')
})