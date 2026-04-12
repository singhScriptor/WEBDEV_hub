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
    deleteElement(){
        let temp=this.head,i=0
        while(temp){
            i++
            temp=temp.next
        }
        i=i-3
        if(i<0){
            return this.head
        }
        if(i === 0){
            this.head=this.head.next
            return this.head
        }
        let slow=this.head
        for(let j=1;j<i;j++){
            slow=slow.next
        }
        if(slow.next){
            slow.next=slow.next.next
        }
        return this.head
    }
}
let l=new linkedList()
l.head= new Node(1)
l.head.next=new Node(3)
l.head.next.next=new Node(2)
l.head.next.next.next=new Node(1)
l.head.next.next.next.next=new Node(9)

console.log(l.deleteElement())