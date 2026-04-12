class Node{
    constructor(data) {
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    delete3rdNode(){
        let i=0,
        temp=this.head
        while(temp){
            i++
            temp=temp.next
        }
        let target=i-3 
        if(target < 0){
            return this.head
        }
        if(target === 0){
            this.head=this.head.next
            return this.head
        }
        let slow=this.head
        for(let j=1;j<target;j++){
            slow=slow.next
        }
        if(slow.next){
            slow.next=slow.next.next
        }
        return this.head
    }
   
}