document.addEventListener("DOMContentLoaded",initializeButton)

let submit=document.getElementById('submit')

let userList=document.getElementsByClassName('fruits')[0]

submit.addEventListener('click',addDetails)

function addDetails(e){
    e.preventDefault()
    let fruitName=document.getElementById("fruit_name").value 
    if(fruitName){
        console.log(fruitName)
        showFruitName(fruitName)
    }
    else{
        console.log("Enter fruit Name first")
    }
}
function showFruitName(fruitName){
    let list=document.createElement('li')
    list.className="fruits"
    list.innerHTML=`${fruitName} <button class="del-btn">X</button>`
    userList.appendChild(list)

    //add edit button function
    addEditButton(list)

    deleteDetails(list)

}
function deleteDetails(list){
    let delBtn=list.querySelector('.del-btn')
    delBtn.addEventListener('click',()=>{
        list.remove()
    })
}

function addEditButton(list){
    let editBtn=document.createElement('button')
    editBtn.className="edt-btn"
    editBtn.textContent="edit"
    editBtn.style.backgroundColor="black"
    editBtn.style.color="white"
    editBtn.style.border="none"
    editBtn.style.borderRadius="5px"
    editBtn.style.margin="5px"
    list.appendChild(editBtn)
}

function initializeButton(){
    const item=userList.getElementsByTagName('li')
    for(let i of item){
        deleteDetails(i)
        addEditButton(i)
    }
}

