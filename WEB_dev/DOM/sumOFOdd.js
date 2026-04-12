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
    findSumOfodd(){
        let current=this.head
        let sum=0
        while(current){
            if(current.data % 2 !== 0){
                sum+=current.data
            }
            current=current.next
        }
        return sum

    }
}
let l=new LinkedList()
l.head=new Node(5)
l.head.next=new Node(7)
l.head.next.next=new Node(9)
l.head.next.next.next=new Node(8)
l.head.next.next.next.next=new Node(13)

console.log(l.findSumOfodd())