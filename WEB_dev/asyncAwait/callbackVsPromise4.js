function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Step 1 completed")
        },2000)
    })
}
function step2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Step 2 completed")
        },1000)
    })
}
step1()
.then((res)=>{
    console.log(res)
    return step2()
})
.then((res)=>{
    console.log(res)
})
.then(()=>{
    console.log("All steps completed")
})
.catch((err)=>console.log(err))