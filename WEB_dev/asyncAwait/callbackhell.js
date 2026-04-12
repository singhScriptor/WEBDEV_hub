function step1(step2){
    setTimeout(()=>{
        console.log("Step 1 completed")
        step2()
    },2000)
}
function step2(next){
    setTimeout(()=>{
        console.log('Step 2 completed')
        next()
    },1000)
}
step1(()=>{
    step2(()=>{
        console.log("All step completed")
    })
})