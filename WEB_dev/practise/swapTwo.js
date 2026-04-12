let swapVariables=function(a,b){
    let swap=a
    a=b
    b=swap
    console.log(a,b)
    
}
let a=3,b=4
swapVariables(a,b)

let swap2=function(a,b){
    return `a=${b},b=${a}`
}
let c=13,d=14
console.log(swap2(c,d))