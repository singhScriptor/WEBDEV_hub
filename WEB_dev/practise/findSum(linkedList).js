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
        let odd=0
        let temp=this.head
        while(temp){
            if(temp.data%2 !== 0){
                odd+=temp.data
            }
            temp=temp.next
        }
        return odd
    }
}
let list=new linkedList()
list.head=new Node(2)