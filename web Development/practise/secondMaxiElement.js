let secondMaximumElement=function(arr){
    let maxi=arr[0],secondMaxi=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            secondMaxi=maxi
            maxi=arr[i]
        }
    }
    return secondMaxi
}
let arr=[1,2,4,1,5,6]
console.log(secondMaximumElement(arr))