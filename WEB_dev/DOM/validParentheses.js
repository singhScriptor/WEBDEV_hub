let validParentheses=function(s){
    let dict={']':'[','}':'{',')':'('},stack=[]
    for(let i of s){
        if(i in dict){
            if(stack.length === 0  || stack.pop() !== dict[i]){
                return false
            }
        }
        else{
            stack.push(i)
        }
    }
    return stack.length === 0
}
let s="{}"
console.log(validParentheses(s))


//2nd method
let validate=function(t){
    while(t.length){
        let temp=t 
        t=t.replace('{}',''),
        t=t.replace('[]',''),
        t=t.replace('()','')
        if(t === temp){
            return false
        }
    }
    return true
}
let r="{}["
console.log(validate(r))