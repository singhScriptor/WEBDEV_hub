let button=document.querySelector('[type="submit"]')
let paragraph=document.getElementsByTagName('p')[0]
let count=0

let header=document.getElementsByTagName('h1')[0]
header.addEventListener('mouseover',()=>{
    header.style.color='yellow'
    header.textContent='mouseHOVERED'
})

header.addEventListener('mouseout',()=>{
    header.textContent='mouseOut'
    header.style.color='black'
})

button.addEventListener('mouseover',()=>{
    button.style.backgroundColor='Green'
    button.textContent='clicked'

})

button.addEventListener('mouseout',()=>{
    button.style.backgroundColor="Red"
    button.textContent='click_here'
})

let form=document.getElementsByTagName('form')[0]
form.addEventListener('submit',addcount)
function addcount(e){
    e.preventDefault()
    count++
    paragraph.textContent=`Count:${count}`
}
