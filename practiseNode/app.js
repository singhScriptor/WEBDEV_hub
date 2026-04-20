

// create http 
const http=require('http')

// create Server 
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    //
    const fs=require('fs')
 
    // create HTML 
    if(url === '/'){
        res.setHeader("Content-Type","text/html");
        fs.readFile('formValues.txt',(err,data)=>{
            const savedValues=data.toString()
            res.end(`
                <form action="/message" method="post">
                    <label>Name:</label>
                    <input type="text" name="name">
                    <button type="submit">Submit</button>
                </form>
            `)
        })
    }
    else{

        // handle from submission (post to /message)
        if(req.url === '/message'){
            let dataChunks=[]
            //collect incoming data chunk from req
            req.on('data',(chunks)=>{
                console.log(chunks)
                dataChunks.push(chunks)
            })
            req.on('end',()=>{
                let buffer=Buffer.concat(dataChunks)
                console.log(buffer)

                let formData=buffer.toString();
                console.log(formData)

                // exact value 
                const fromValues=formData.split('=')[1]

                // write exact value in file 
                fs.writeFile('formValues.txt',fromValues,(err)=>{
                    res.statusCode=302;
                    res.setHeader('location','/')
                    res.end()
                })
            })
        }
        else{
            if(req.url === '/read'){
                fs.readFile('formValues.txt',(err,data)=>{
                    console.log(data.toString())
                    res.end(`<h1> ${data.toString()} </h1>`)
                })
            }
        }
    }
})
server.listen(3000,()=>{
    console.log('server is listening')
})