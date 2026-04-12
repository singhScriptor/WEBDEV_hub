let form=document.getElementById('form')
let submit=document.getElementById('submit')
let div=document.getElementById('output')

submit.addEventListener('click',onSubmit)
document.addEventListener('DOMContentLoaded',onLoad)

function onSubmit(e){
    e.preventDefault()
    let name=document.getElementById('name').value
    console.log("Hey Good Morning",name)
    localStorage.setItem("userName", name)
    display(name)

}
function display(name){
    div.innerHTML=`Hey Good Morning, ${name}!`
}

function onLoad(){
    const onload=localStorage.getItem("userName")
    if(onload){
        display(onload)
    }
}
