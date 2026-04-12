let minimumArr=function(arr){
    return Math.min(...arr)
}
let arr=[1,2,4,1,5,6]
console.log(minimumArr(arr))


function minimumInArray(jrr){
    let mini=jrr[0]
    for(let i=0;i<jrr.length;i++){
        if(jrr[i] < mini){
            mini=jrr[i]
        }
    }
    return mini
}
let jrr=[-1,2,4,1,5,6]
console.log(minimumInArray(jrr))