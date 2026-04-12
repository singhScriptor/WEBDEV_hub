class queue{
    constructor(queue){
        this.queue=queue
        this.minpos=0
        this.maxpos=queue.length-1
    }
    pushIntoQueue(value){
          this.queue.push(value)
          this.maxpos++
    }
    popFromQueue(){
        if(this.queue.length === 0)return -1
        else return this.queue.shift()
    }

}
let arr=[3,4,5,7,8]
let q1=new queue(arr)
q1.pushIntoQueue(1)
console.log(q1.popFromQueue())
console.log(q1.popFromQueue())
console.log(q1.popFromQueue())
console.log(q1.popFromQueue())
q1.pushIntoQueue(1)
console.log(q1.popFromQueue())
console.log(q1.popFromQueue())
console.log(q1.popFromQueue())