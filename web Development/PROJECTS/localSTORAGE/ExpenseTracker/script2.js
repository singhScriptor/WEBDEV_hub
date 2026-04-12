document.addEventListener('DOMContentLoaded',reloaded)

let form=document.getElementById('form')
let submit=document.getElementById('submit')
let userList=document.getElementById("user-details")

form.addEventListener('submit',addDetails)



function addDetails(e){
    e.preventDefault()
    let details={
        price:document.getElementById('price').value,
        option:document.getElementById('select').value,
        description:document.getElementById('description').value
    }
    if(details){
        let key=Date.now()
        details.key=key
        localStorage.setItem(key,JSON.stringify(details))

        showDetails(details)
    }
    form.reset()
}

function showDetails(details){
    let list=document.createElement('li')
    list.id=`list-${details.key}`
    list.className='p-3 m-2 shadow-lg border border-info rounded list-unstyled'
    list.innerHTML=`<strong>Info :</strong>${details.price}, <strong>Option :</strong>${details.option},
    <strong>Description :</strong>${details.description}`

    //create button

    //edit button
    let editBtn=document.createElement('button')
    editBtn.id='edit'
    editBtn.className='bg-warning p-1 rounded m-2 border-0'
    editBtn.textContent="edit"

    editBtn.addEventListener('click',function(){
        editFunction(details,list)
    })

    list.appendChild(editBtn)

    //delete button
    let deleteBtn=document.createElement('button')
    deleteBtn.id='delete'
    deleteBtn.className='bg-danger p-1 m-2  rounded border-0'
    deleteBtn.textContent='delete'

    deleteBtn.addEventListener('click',function(){
        deleteDetails(details,list)
    })

    list.appendChild(deleteBtn)


    userList.appendChild(list)
}
function editFunction(details,list){
    document.getElementById('price').value=details.price;
    document.getElementById('select').value=details.option;
    document.getElementById('description').value=details.description;

    //remove previous submit
    form.removeEventListener('submit',addDetails)


    //adding edited details
    function updateDetails(e){
        e.preventDefault()

        details.price=document.getElementById('price').value;
        details.option=document.getElementById('select').value;
        details.description=document.getElementById('description').value;

        //overWrite in localStorage
        localStorage.setItem(details.key,JSON.stringify(details))

        //updating on ui
        list.innerHTML=`<strong>Info :</strong>${details.price}, <strong>Option :</strong>${details.option},
        <strong>Description :</strong>${details.description}`

        //attaching buttons

            //edit button
        let editBtn=document.createElement('button')
        editBtn.id='edit'
        editBtn.className='bg-warning p-1 rounded m-2 border-0'
        editBtn.textContent="edit"

        editBtn.addEventListener('click',function(){
        editFunction(details,list)
        })

        list.appendChild(editBtn)

        //delete button
        let deleteBtn=document.createElement('button')
        deleteBtn.id='delete'
        deleteBtn.className='bg-danger p-1 m-2  rounded border-0'
        deleteBtn.textContent='delete'

        deleteBtn.addEventListener('click',function(){
            deleteDetails(details,list)
        })

        list.appendChild(deleteBtn)

        //restore the original submit
        form.removeEventListener('submit',updateDetails)
        form.addEventListener('submit',addDetails)
        form.reset()

    }
    form.addEventListener('submit',updateDetails)
}

function deleteDetails(details,list){
    list.remove()
    localStorage.removeItem(details.key)
}

function reloaded(){
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i)
        let details=JSON.parse(localStorage.getItem(key))
        if(details){
            details.key=key 
            showDetails(details)
        }
    }
}