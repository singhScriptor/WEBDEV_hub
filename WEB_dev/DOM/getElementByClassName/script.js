//changing the background of header 1 using getElementsByClassName

let div=document.getElementsByClassName("header")
for(let i=0;i<div.length;i++){
    div[i].style.backgroundColor="skyblue"
    div[i].style.borderRadius="5px"
    div[i].style.padding="5px"
}

// making third element of the list have yellow background color 

let userList=document.getElementsByClassName("fruits_name")
userList[2].style.backgroundColor="yellow"

// making all font of lists bold 
for(let i=0;i<userList.length;i++){
    userList[i].style.fontWeight="bold"
}
