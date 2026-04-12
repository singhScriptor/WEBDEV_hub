function bookSearchPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let book=Math.random()>0.5
            if(book){
                resolve("Book found")
            }
            else{
                reject("Book not found")
            }
        },3000)
    })
}
bookSearchPromise()
.then((res)=>console.log(res))
.catch((err)=>console.log(err))