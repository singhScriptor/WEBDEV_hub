let header=document.querySelector('div')
header.style.backgroundColor="lightblue"
header.style.padding='10px'
header.style.textAlign='right'
header.style.borderTopRightRadius='10px'
header.style.borderTopLeftRadius='10px'

let header2=document.getElementsByTagName('h2')[0]
header2.style.color="brown"

let div=document.getElementsByClassName('ul')[0]
div.style.backgroundColor='gray'
div.style.padding='10px'
div.style.borderRadius='5px'

// let list=document.getElementsByTagName('ul')[0]
// list.style.listStyleType="none"

// or 
let list=document.querySelectorAll('li')
 list.forEach((i,index)=>{
    i.style.listStyleType="none"
    i.style.padding="10px"
    i.style.margin="5px"
    i.style.borderRadius='5px'
    i.style
    if(index % 2===0){
        i.style.backgroundColor='white'
    }
    else{
        i.style.backgroundColor="red"
        i.style.color='white'
    }
})

let newHeader=document.createElement('h3')
newHeader.textContent="Buy high quality organic fruits online"
newHeader.style.fontStyle='italic'

header.appendChild(newHeader)

let paragraph=document.createElement('p')
paragraph.id="fruits-total"
paragraph.textContent="Total fruits:4"


let ul=document.querySelector('ul')
div.insertBefore(paragraph,ul)



