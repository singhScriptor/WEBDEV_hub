function add(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let ans=value+3
            console.log("Added 3")
            resolve(ans)
        },2000)
    })
}
function multiply(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let ans=value*2 
            console.log("Multiply by 2")
            resolve(ans)
        },1000)
    })
}
let value=2
add(value)
.then((value)=>{
    return multiply(value)
})
.then((value)=>{
    console.log('Final result:',value)
})
.catch((err)=>{
    console.log(err)
})