let secondMaximum=function(arr){
    let maxi=Math.max(...arr)
    let target=arr.filter(sh=>sh !== maxi)
    let secondMaxi=Math.max(...target)
    return secondMaxi
}
let arr=[1,-2,-3,6,3,7]
console.log(secondMaximum(arr)) 