// let secondMax=function(arr){
//     let maxi=Math.max(...arr)
//     let filtered=arr.filter(n=>n!==maxi)
//     let secMaxi=Math.max(...filtered)
//     return secMaxi
// }
// let arr=[9,7,1,8,4,5,2]
// console.log(secondMax(arr))


let secondMax=function(arr){
    let maxi=Math.max(...arr)
    let filtered=arr.filter(sh=>sh != maxi)
    let secondMaxi=Math.max(...filtered)
    return secondMaxi

}
let arr=[1,6,7,4,9,3,2,5]
console.log(secondMax(arr))