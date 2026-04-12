document.addEventListener('DOMContentLoaded',loaded)


let form=document.getElementById('form')
let submit=document.getElementById('submit')

form.addEventListener('submit',addDetails)

let userList=document.getElementById('user-details')

function addDetails(e){
    e.preventDefault()
    let expenseDetails={
        price:document.getElementById('price').value,
        option:document.getElementById('select').value,
        description:document.getElementById('description').value
    }
    if(expenseDetails){
        let key=Date.now()
        expenseDetails.key=key
        localStorage.setItem(key,JSON.stringify(expenseDetails))

        showDetails(expenseDetails)
    }
    // document.getElementById('price').value=''
    // document.getElementById('select').value=''
    // document.getElementById('description').value=''
    form.reset()
}
function showDetails(expenseDetails){
    let list=document.createElement('li')
    list.id=`list-${expenseDetails.key}`
    list.className="bg-secondary border-info shadow-lg rounded p-2  m-2 border border-info rounded list-unstyled "
    list.innerHTML=`<strong>Info :</strong>${expenseDetails.description},<strong>Category :</strong>${expenseDetails.option},<strong>Price :</strong>${expenseDetails.price} `

    //add button 

    // edit button
    let editBtn=document.createElement('button')
    editBtn.id='edit'
    editBtn.className="bg-warning p-1 m-2 rounded text-white"
    editBtn.textContent='edit'

    editBtn.addEventListener('click',function(){
        editDetails(expenseDetails,list)
    })

    // delete button
    let delBtn=document.createElement('button')
    delBtn.id="delete"
    delBtn.className="bg-danger p-1 m-2 rounded text-white"
    delBtn.textContent="delete"

    delBtn.addEventListener('click',function(){
        deleteDetails(expenseDetails,list)
    })

    list.appendChild(editBtn)
    list.appendChild(delBtn)

    userList.appendChild(list)
}
function editDetails(expenseDetails,list){
    document.getElementById('price').value = expenseDetails.price;
    document.getElementById('select').value = expenseDetails.option;
    document.getElementById('description').value = expenseDetails.description;

    // remove old list item so new submission replaces it
    userList.removeChild(list);

    localStorage.removeItem(expenseDetails.key)

}

function deleteDetails(expenseDetails,list){
    userList.removeChild(list)
    localStorage.removeItem(expenseDetails.key)
}

function loaded(){
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i)
        let expenseDetails=JSON.parse(localStorage.getItem(key))
        if(expenseDetails){
            expenseDetails.key=key
            showDetails(expenseDetails)
        }
    }
}


