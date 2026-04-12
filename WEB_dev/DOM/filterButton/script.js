let filter=document.getElementById('filter')

filter.addEventListener('keyup',searchFruit)

function searchFruit(e){
    e.preventDefault()
    let text=e.target.value.toLowerCase()
    let fruit_name=document.getElementsByClassName('fruits')
    for(let i=0;i<fruit_name.length;i++){
        let item=fruit_name[i].textContent.toLocaleLowerCase()
        if(item.includes(text)){
            fruit_name[i].style.display=''
        }
        else{
            fruit_name[i].style.display='none'
        }
    }
}