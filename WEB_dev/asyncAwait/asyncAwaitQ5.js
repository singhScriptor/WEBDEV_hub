function orderPizza(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let delivered=Math.random()>0.5
            if(delivered){
                resolve('Pizza has been delivered!')
            }
            else{
                reject("Pizza delivery failed")
            }
        },2000)
    })
}
async function main() {
    try{
        let res=await orderPizza()
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
}
main()