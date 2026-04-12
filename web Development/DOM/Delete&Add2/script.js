document.addEventListener('DOMContentLoaded',previousList)

let submit=document.getElementById('submit')

let userList=document.getElementsByClassName('fruits')[0]

submit.addEventListener('click',submitFruits)

function submitFruits(e){
    e.preventDefault()
    let fruit_name=document.getElementById('fruit_name').value
    if(fruit_name){
        console.log(fruit_name)
        displayFruits(fruit_name)
    }
    else{
        console.log("enter fruit details")
    }
}

function displayFruits(fruit_name){
    let list=document.createElement('li')
    list.className="fruits"
    list.innerHTML=`${fruit_name} <button class="del-btn">X</button>`
    
    userList.appendChild(list)

    addEditFuntion(list)

    deleteDetails(list)
}
function addEditFuntion(list){
    let editBtn=document.createElement('button')
    editBtn.className="edt-btn"
    editBtn.textContent="edit"
    editBtn.style.backgroundColor="lightYellow"
    editBtn.style.borderRadius="5px"
    editBtn.style.padding="5px"
    editBtn.style.border="none"
    editBtn.style.color="blue"
    editBtn.style.margin="5px"
    editBtn.style.width="10%"
    list.appendChild(editBtn)
}

function previousList(){
    let item=userList.getElementsByTagName('li')
    for(let i of item){
        addEditFuntion(i)
        deleteDetails(i)
    }
}

function deleteDetails(list){
    let delBtn=list.querySelector('.del-btn')
    delBtn.addEventListener('click',()=>{
        list.remove()
    })
}