function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('step 1')
            resolve("Message from Step 1")
        },2000)
    })
}
function step2(message){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Step 2 received:"+ message)
        },1000)
    })
}
step1()
.then((step1Msg)=>{
    //console.log(res)
    return step2(step1Msg)
})
.then((res)=>{
    console.log(res)
    console.log("All steps completed!")
})
.catch((err)=>console.log(err))