function projectorPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let pizza=Math.random()>0.5
            if(pizza){
                resolve("Projector rented successfully")
            }
            else{
                reject("Error: Projectors out of stock")
            }
        },1000)
    })
}
function pizzasPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let pizza=Math.random()>0.5
            if(pizza){
                resolve("Pizzas delivered on time")
            }
            else{
                reject("Error: Pizzas not delivered on time")
            }
        },2000)
    })
}
function friendsPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let friends=Math.random()>0.5
            if(friends){
                resolve("Both friends available")
            }
            else{
                reject("Error: Both friends not available")
            }
        },3000)
    })
}
Promise.all([projectorPromise(),pizzasPromise(),friendsPromise()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))