let arr=[1,2,3]
let bufferValue=Buffer.from(arr)
console.log(bufferValue)

// string value 
let value="ABC";
let bufferValue1=Buffer.from(value)
console.log(bufferValue1)

console.log(bufferValue,bufferValue1)

// use concat 
let ans=Buffer.concat([bufferValue,bufferValue1])
console.log(ans.toString())