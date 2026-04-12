function boilWater(){
    return new Promise((resovle)=>{
        setTimeout(()=>{
            resovle("Water boiled")
        },2000)
    })
}
function addCoffeePowder(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Added coffee powder")
        },500)
    })
}
function brewCoffee(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Brewed coffee")
        },1000)
    })
}
function haveCoffee(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Enjoying my coffee")
        },3000)
    })
}
boilWater()
.then((res)=>{
    console.log(res)
    return addCoffeePowder()
})
.then((res)=>{
    console.log(res)
    return brewCoffee()
})
.then((res)=>{
    console.log(res)
    return haveCoffee()
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))