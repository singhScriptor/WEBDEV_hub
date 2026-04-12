function orderFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let food=Math.random()>0.5
            if(food){
                resolve("Food delivered")
            }
            else{
                reject("Food not delivered")
            }
        },2000)
    })
}
function orderDessert(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dessert=Math.random()>0.5
            if(dessert){
                resolve('Dessert delivered')
            }
            else{
                reject('Dessert not delivered')
            }
        },2000)
    })
}
orderFood()
.then((res)=>{
    console.log(res)
    return orderDessert()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})


// this is dependent


// Promise.all([orderFood(),orderDessert()])
// .then((result) => {
//     console.log(result)
// })
// .catch((err) => {
//     console.log(err)
// });
