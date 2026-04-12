class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    findMiddle(){
        let slow=this.head,fast=this.head
        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow
    }
}

let l=new LinkedList()
l.head=new Node(1)
l.head.next=new Node(2)
l.head.next.next=new Node(3)
l.head.next.next.next=new Node(4)
l.head.next.next.next.next=new Node(5)
console.log(l.findMiddle().data) 


