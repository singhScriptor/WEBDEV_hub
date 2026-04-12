function add(value,callback){
    setTimeout(()=>{
        let sum=value+3
        console.log("Added 3")
        callback(sum)
    },2000)
}
function multiply(value,callback){
    setTimeout(()=>{
        let multi=value*2
        console.log('Multiply by 2')
        callback(multi)
    },1000)
}
let value=2 
add(value,(sum)=>{
    multiply(sum,(ans)=>{
        console.log('Final Result :',ans)
    })
})