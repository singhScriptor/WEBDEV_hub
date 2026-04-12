let minElement=function(arr){
    let mini=arr[0]
    for(let i= 0;i<arr.length;i++){
        if(arr[i] < mini){
            mini=arr[i]
        }
    }
    return mini
}
let arr=[1,-2,-3,6,3,7]
console.log(minElement(arr))