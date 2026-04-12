let header1=document.querySelector('h1')
let div=document.getElementById('header')

header1.textContent="Fruit World"
header1.style.color='orange'

div.style.backgroundColor="green"
div.style.borderBottom="2px solid orange"

let header2=document.querySelector('h2')
header2.style.color="green"

let div2=document.createElement('div')
div2.id="thanks"
let p=document.createElement('p')
p.textContent="Please visit us again"
div2.appendChild(p)

document.body.appendChild(div2)

let list=document.querySelectorAll('li')
list[2].style.backgroundColor="yellow"
list.forEach((i)=>{
    i.style.fontWeight="bold"
})

let userList=document.querySelector('ul')
let newList=document.createElement('li')
newList.innerHTML="Mango"
userList.appendChild(newList)

newList.style.backgroundColor="skyblue"

let li=document.querySelectorAll('li')
li.forEach((i)=>{
    i.style.fontStyle="italic"
})
