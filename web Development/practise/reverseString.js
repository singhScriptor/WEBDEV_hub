let reverseString=function(str){
    return str.split('').reverse().join('')
}
let s="ram"
console.log(reverseString(s))

let rev2=function(str){
    let reverse=''
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    return reverse
}
let str="Hello"
console.log(rev2(str))