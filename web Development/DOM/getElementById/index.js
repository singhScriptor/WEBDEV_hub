//changing the main header

let header1=document.getElementById("h1")

header1.textContent="Fruit World"
header1.style.color="orange"

//id of div for changing background color
let div1=document.getElementById('header')

div1.style.backgroundColor="green"
div1.style.borderBottom="3px solid orange"

//header 2 color change
let header2=document.getElementById('h2')
header2.style.color="green"

//introducing paragraph in div with id thanks
let div=document.getElementById('thanks')
let paragraph=document.createElement('p')
paragraph.textContent="Please visit us again"
div.appendChild(paragraph)




