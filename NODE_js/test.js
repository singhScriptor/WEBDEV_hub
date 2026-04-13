// let food="Pasta"
// let NA=food.replace("a","e")
// console.log(food)
// console.log(NA)
// let ans=food.replace(/a/g,"e")
// console.log(ans)

// // alternate method to replace all a to e 
// function replaceAllE(str){
//     let ans=''
//     for(let i=0;i<str.length;i++){
//         if(str[i] === 'a'){
//             ans+='e'
//         }
//         else{
//             ans+=str[i]
//         }
//     }
//     return ans
// }
// let str='Pasta'
// console.log(replaceAllE(str))


function restOp(n, ...args){
    console.log(n,args)
}
restOp(5,1,2,3,4,5)

