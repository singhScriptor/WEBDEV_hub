const http = require("http")

const server = http.createServer((req,res)=>{

    //response body type 
    res.setHeader("Content-Type","text/html")

    res.end(`
        <form>
            <label>Name :</label>
            <input type="text" name="username">
            <button type="submit">Submit</button>
        </form>
    `)
})

server.listen(3000,()=>{
    console.log("Server is Listening")
})