function boardBussAt10(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let busArrival=Math.random()>0.5
            if(busArrival){
                resolve("Board the bus")
            }
            else{
                reject("Error: Bus is late")
            }
        },3000)
    })
}
async function  main() {
    try{
        let res=await boardBussAt10()
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
}
main()