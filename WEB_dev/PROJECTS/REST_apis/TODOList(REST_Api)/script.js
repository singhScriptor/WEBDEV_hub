document.addEventListener('DOMContentLoaded',reload)

let form=document.querySelector('form')

form.addEventListener('submit',addTodoList)

let userList=document.getElementsByTagName('ul')[0]

let API_Link=`https://crudcrud.com/api/eb88395154ea46129d896be158d75c6d/todoDetails`

function addTodoList(event){
    event.preventDefault()
    let todoDetails={
        task:event.target.name.value,
        description:event.target.description.value
    }
    if(todoDetails){
        submitToDo(todoDetails)
    }
    form.reset()
}

async function submitToDo(todoDetails) {
    try{
        let res=await axios.post(API_Link,todoDetails)
        console.log(res.data)
        let details=res.data
        let id=details._id
        displayTodo(details,id)

    }
    catch(err){
        console.log("error!",err)
    }
}

async function displayTodo(details,id) {
    try{
        let list=document.createElement('li')
        list.className='list d-flex  border-0 bg-secondary p-2 m-2 rounded list-unstyled text-white'
        list.innerHTML=`To-Do: ${details.task}, Description: ${details.description}`

        let editBtn=document.createElement('button')
        editBtn.className='edt-btn bg-transparent text-black rounded border-0 ms-auto p-1'
        editBtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'

        list.appendChild(editBtn)

        let delBtn=document.createElement('button')
        delBtn.className='del-btn bg-transparent rounded ms-2 text-black border-0 p-1'
        delBtn.innerHTML='<i class="fa-solid fa-trash"></i>'

        list.appendChild(delBtn)

        editBtn.addEventListener('click',function(e){
            e.preventDefault()
            editfunction(details,list,id)
        })

        delBtn.addEventListener('click',function(e){
            e.preventDefault()
            deleteFunction(list,id)
        })

        userList.appendChild(list)
    }
    catch(err){
        console.log('Error!',err)
    }
}

async function editfunction(details,list,id) {
    try{
        document.getElementsByClassName('name')[0].value=details.task;
        document.getElementsByClassName('description')[0].value=details.description;

        form.removeEventListener('submit',addTodoList)

        async function editTodoList(e) {
            try{
                e.preventDefault()

                let updatedDetails = {
                    task: document.getElementsByClassName('name')[0].value,
                    description: document.getElementsByClassName('description')[0].value

                }


                axios.put(`${API_Link}/${id}`,updatedDetails)

                list.innerHTML=`To-Do: ${updatedDetails.task}, Description: ${updatedDetails.description}`

                let editBtn=document.createElement('button')
                editBtn.className='edt-btn bg-transparent text-black rounded border-0 ms-auto p-1'
                editBtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
                list.appendChild(editBtn)

                let delBtn=document.createElement('button')
                delBtn.className='del-btn bg-transparent rounded ms-2 text-black border-0 p-1'
                delBtn.innerHTML='<i class="fa-solid fa-trash"></i>'
                list.appendChild(delBtn)

                editBtn.addEventListener('click',function(e){
                    e.preventDefault()
                    editfunction(updatedDetails,list,id)
                })

                delBtn.addEventListener('click',function(e){
                    e.preventDefault()
                    deleteFunction(list,id)
                })
            }
            catch(err){
                console.log("error!",err)
            }
            form.removeEventListener('submit',editTodoList)
            form.addEventListener('submit',addTodoList)
            form.reset()
        }
        form.addEventListener('submit',editTodoList)
    }
    catch(err){
        console.log("Error!",err)
    }
}

async function deleteFunction(list,id){
    try{
        await axios.delete(`${API_Link}/${id}`)
        list.remove()
    }
    catch(err){
        console.log('error!',err)
    }
}

async function reload() {
    try{
        let res=await axios.get(`${API_Link}`)
        let data=res.data
        data.forEach(element => {
            displayTodo(element,element._id)
        });
    }
    catch(err){
        console.log('Error!',err)
    }
}