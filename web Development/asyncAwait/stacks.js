class stack{
    constructor(stack){
        this.stack=stack
    }
    pushIntoStack(value){
        this.stack.push(value)
    }
    popFromStack(){
        if(this.stack === 0){
            return -1
        }
        return this.stack.pop()
    }
}
let arr=[3,4,5,7,8]
let s1=new stack(arr)
s1.pushIntoStack(1)
console.log(s1.popFromStack())

console.log(s1.popFromStack())

console.log(s1.popFromStack())
s1.pushIntoStack(1)
console.log(s1.popFromStack())

console.log(s1.popFromStack())
