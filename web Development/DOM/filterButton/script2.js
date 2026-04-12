let filter=document.getElementById('filter')

//add eventListener
filter.addEventListener('keyup',searchFruits)

//create searchFruits function 
function searchFruits(e){
    e.preventDefault()
    let text=e.target.value.toLowerCase()
    let fruitName=document.getElementsByClassName('fruits')
    for(let i=0;i<fruitName.length;i++){
        let item=fruitName[i].textContent.toLocaleLowerCase()
        if(item.includes(text)){
            fruitName[i].style.display=""
        }
        else{
            fruitName[i].style.display='none'
        }
    }
}

