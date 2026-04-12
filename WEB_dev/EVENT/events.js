let submitBtn=document.getElementById('submit')
let clicked=false
submitBtn.addEventListener('click',function(e){
    // e.target.style.backgroundColor="green"
    // console.log("button Clicked")
    // alert("button clicked")
    //submitBtn.style.backgroundColor="green"
    e.preventDefault()
    clicked=true
    setTimeout(()=>{
        e.target.style.backgroundColor="green"
        console.log("Button clicked")
        clicked=false
    },1000)
})

submitBtn.addEventListener('mouseover',function(e){
    if(!clicked){
        e.target.style.backgroundColor="blue"
        console.log("mouse is overed")
    }
})

submitBtn.addEventListener('mouseout',function(e){
    if(!clicked){
        e.target.style.backgroundColor="pink"
        console.log("mouse is out")
    }

})

