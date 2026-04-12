function checkCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let car=Math.random()>0.5
            if(car){
                resolve("Car is ready")
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
            let message=Math.random()>0.5
            if(message){
                resolve("Packed everything for picnic")
            }
            else{
                reject("Error: Not ahve some essentials")
            }
        },1000)
    })
}
checkCar()
.then((res)=>{
    console.log(res)
    return packForPicnic()
})
.then((res)=>{
    console.log(res)
})
.then(()=>{
    console.log("Go for picnic")
})
.catch(()=>{
    console.log('Picnic cancelled')
})