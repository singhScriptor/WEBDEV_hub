let div=document.querySelector('.header')
div.style.backgroundColor='skyblue'
div.style.textAlign="right"
div.style.borderRadius="5px"

let userList=document.querySelector('ul')
userList.style.backgroundColor="grey"
userList.style.padding="2px"
userList.style.margin="10px"
userList.style.borderRadius='5px'
userList.style.listStyleType = "none";

let list=document.querySelectorAll('li')
for(let i=0;i<list.length;i++){
    
    if(i%2===0){
        list[i].style.backgroundColor="red"
        list[i].style.padding="5px"
        list[i].style.borderRadius="5px"
        list[i].style.margin="10px"
        list[i].style.color='White'
    }
    else{
        list[i].style.backgroundColor="white"
        list[i].style.padding="5px"
        list[i].style.borderRadius="5px"
        list[i].style.margin="10px"
    }
}
