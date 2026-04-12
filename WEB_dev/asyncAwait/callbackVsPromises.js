function buyBike(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Bought Royal Enfield")
        },2000)
    })
}
function planTrip(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Trip to Ladakh planned")
        },1000)
    })
}
function reachLadakh(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Reach Ladakh")
        },1000)
    })
}
function visitPangongLake(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Visited Pangong Lake")
        },500)
    })
}
buyBike()
.then((res)=>{
    console.log(res)
    return planTrip()
})
.then((res)=>{
    console.log(res)
    return reachLadakh()
})
.then((res)=>{ 
    console.log(res)
    return visitPangongLake()
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))