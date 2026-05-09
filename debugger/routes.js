const fs = require('fs')

const requireHandler = (req,res)=>{
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.setHeader("Content-Type","text/html")
        fs.readFile("formValues.txt",(err,data)=>{
            let existedData=''
            if(!err){
                existedData=data.toString()
            }
            const newValue=existedData.replaceAll('\n','<br>')
            res.end(`
                <h1>${newValue || "User-Name"}</h1>
                <form action="/message" method="post">
                <label>username : </label>
                <input type="text" name="username">
                <button type="submit">Submit</button>
                </form>
            `)
        })
    }
    else if(url === '/message'){
        res.setHeader('Content-Type','text/html')
        let chunks=[]
        req.on('data',(chunk)=>{
            chunks.push(chunk)
            //console.log(chunks)


        })
        req.on('end',()=>{
            let buffer = Buffer.concat(chunks)
            let bufferValue=buffer.toString().split('=')
            //console.log(bufferValue)

            let value = bufferValue[1].replaceAll('+',' ')
            //console.log(value)

            fs.writeFile('formValues.txt',`${value}\n`,(err)=>{
                res.statusCode = 302
                res.setHeader('Location','/')
                res.end()
            })
        })
    }
    else if(url === '/read'){
        fs.readFile('formValues.txt',(err,data)=>{
            if(!err){
                res.setHeader("Content-Type","text/html")
                res.end(`<h1>${data.toString()}</h1>`)
            }
        })
    }
}

exports.handler =requireHandler
