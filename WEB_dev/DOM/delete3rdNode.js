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
    delete3rdNode(){
        let i=0
        let temp=this.head
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
            slow.next= slow.next.next
        }
        return this.head
    }
}
