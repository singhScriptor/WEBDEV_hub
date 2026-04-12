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
    sumofOddElement(){
        let odd=0,
        temp=this.head
        while(temp){
            if(temp.data % 2 !== 0){
                odd+=temp.data
            }
            temp=temp.next
        }
        return odd
    }
}

let l=new linkedList()
l.head=new Node(2)
l.head.next=new Node(3)
l.head.next.next=new Node(6)
l.head.next.next.next=new Node(9)
console.log(l.sumofOddElement())