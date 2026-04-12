function increment(value){
    return new Promise((resolve)=>{
        const increaseVal=value+1;
        resolve(increaseVal)
    })
}
function double(value){
    return new Promise((resolve)=>{
        resolve(value*2)
    })
}
function square(value){
    return new Promise((resolve)=>{
        resolve(value*value)
    })
}
let value=2
increment(value)
.then((value)=>{
    return double(value)
})
.then((value)=>{
    return square(value)
})
.then((value)=>{
    console.log(value)
})
.catch((err)=>{
    console.log(err)
})
// async function main() {
//     let value=2
//     let added=await(increment(value))
//     let multiplied= await(double(added))
//     let squared=await(square(multiplied))
//     console.log(squared)
// }
// main()