function balanceParentheses(s){
    while(s.length){
        let temp=s
        s=s.replace('{}','')
        s=s.replace('[]','')
        s=s.replace('()','')
        if(s===temp)return false
    }
    return true
}
let s="{}"
console.log(balanceParentheses(s))

let validParentheses=function(a){
    let dict={']':'[','}':'{',')':'('},stack=[]
    for(let i of a){
        if(i in dict){
            if(stack.length ===0 || stack.pop() !== dict[i])return false
        }
        else stack.push(i)
    }
    return stack.length ===0
}
let a="([])"
console.log(validParentheses(a))
