function maxiElement(arr){
    return Math.max(...arr)
}
let ar=[1,2,4,1,5,6]
console.log(maxiElement(ar))

let maximum=function(jrr){
    let maxi=[-1]
    for(let i=0;i<jrr.length;i++){
        if(jrr[i] > maxi){
            maxi=jrr[i]
        }
    }
    return maxi
}
let jrr=[1,2,4,1,5,6]
console.log(maximum(jrr))
