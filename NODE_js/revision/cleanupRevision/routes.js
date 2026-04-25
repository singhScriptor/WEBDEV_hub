const fs = require("fs")

const requiredFunction=((req,res)=>{
    const url = req.url

    if(url === '/'){
        fs.readFile("formValue.txt",(err,data)=>{
            let savedValue=''
            if(!err){
                savedValue=data.toString()
            }
            res.setHeader("Content-Type","text/html")
            res.end(`
                <form action="/message" method="post">
                <h1>Hey Buddy fill the Details below</h1>
                <label>username :</label>
                <input type="text" name="username">
                <button type="submit">Submit</button>
                </form>
            `)

        })
    }
    else if (url === '/message'){
        let body=[]
        req.on('data',(chunks)=>{
            body.push(chunks)
        })
        req.on('end',()=>{
            let buffer = Buffer.concat(body).toString().split('=')[1]

            fs.writeFile('formValue.txt',formValue, (err)=>{
                res.statusCode=302;
                res.setHeader('Location','/')
                res.end()
            })
        })
    }
})