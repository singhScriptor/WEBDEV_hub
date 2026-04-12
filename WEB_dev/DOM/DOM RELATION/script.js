let div=document.querySelector('#header')
let div2=document.getElementsByClassName('header2')

// manipulating div1 where main header need second header
let h3=document.createElement('h3')
h3.textContent="Buy high quality organic fruits online"
h3.style.fontStyle="italic"

//appending header 3 in main header div 
div.appendChild(h3)

//manipulating div where fruits list are available
let paragraph=document.createElement('p')
paragraph.textContent="Total fruits: 5"
paragraph.id="fruits-total"


let ul=div2[0].querySelector('ul')
ul.before(paragraph)

