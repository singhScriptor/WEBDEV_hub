function combineArrays(arr1,arr2){
    return [...arr1, ...arr2]
}
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

console.log(combineArrays(array1,array2))