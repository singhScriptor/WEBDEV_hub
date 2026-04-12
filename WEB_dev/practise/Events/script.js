let button = document.querySelector('button')

let counter=document.querySelector('h1')

button.addEventListener('mouseover',function(){
    button.style.backgroundColor="pink"
    counter.textContent="Mouse is overed"
})

button .addEventListener('mouseout',function(){
    button.style.backgroundColor=''
    counter.textContent="Mouse is out"
})
