class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
    }
    findMiddleElement(){
        let slow=this.head
        let fast=this.head
        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow
    }
}
