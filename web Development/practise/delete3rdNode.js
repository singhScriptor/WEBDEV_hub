// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//     }
//     remove3rdELement(){
//         let temp=this.head,length=0
//         while(temp){
//             length++
//             temp=temp.next
//         }
//         let indexLen=length-3
//         if(indexLen < 0){
//             return this.head
//         }
//         if(indexLen === 0){
//             this.head=this.head.next
//             return this.head
//         }
//         let slow=this.head
//         for(let i=1;i<indexLen;i++){
//             slow=slow.next
//         }
//         if(slow.next){
//             slow.next=slow.next.next
//         }
//         return this.head
//     }
// }

class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedList {
    constructor () {
        this.head = null
    }
    delete3rdNode(){
        let length=0,temp=this.head
        while(temp){
            length++
            temp=temp.next
        }
        let targetLen=length-3
        if(targetLen < 0){
            return this.head
        }
        if(targetLen === 0){
            this.head=this.head.next
            return this.head
        }
        let slow=this.head
        for(let j=0;j<targetLen-1;j++){
            slow=slow.next
        }
        if(slow.next){
            slow.next=slow.next.next
        }
        return this.head
    }
}
let l=new linkedList()
l.head=new Node(1)
l.head.next=new Node(3)
l.head.next.next=new Node(4)
l.head.next.next.next=new Node(5)
l.delete3rdNode()
console.log(l)
