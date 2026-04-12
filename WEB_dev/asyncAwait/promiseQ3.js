function concertPassPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let concertPass=Math.random()>0.5
            if(concertPass){
                resolve("Pass received")
            }
            else{
                reject("Pass not received")
            }
        },3000)
    })
}
concertPassPromise()
.then((res)=>console.log(res))
.catch((err)=>console.log(err))