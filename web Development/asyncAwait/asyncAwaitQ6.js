function checkCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const carReady=Math.random()>0.5
            if(carReady){
                resolve('Car is ready')
            }
            else{
                reject("Error: Car needs maintenance")
            }
        },2000)
    })
}
function packForPicnic(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let itemPacked=Math.random()>0.5
            if(itemPacked){
                resolve("packed everything for picnic")
            }
            else{
                reject("Error: Not have some essentials")
            }
        },1000)
    })
}
async function main(){
    try{
        let res=await checkCar()
        console.log(res)
        let ans=await packForPicnic()
        console.log(ans)
    }
    catch(err){
        console.log(err)
    }
}
main()