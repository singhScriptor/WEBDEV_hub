document.addEventListener('DOMContentLoaded',reload)

let form=document.querySelector('form')

let userList=document.getElementsByTagName('ul')[0]

form.addEventListener('submit',userDetails)

async function userDetails(event) {
    event.preventDefault()
    try{
        let details={
            username:document.querySelector("[name='username']").value,
            email:document.querySelector("[name='email']").value,
            phone:document.querySelector("[name='phone']").value
        }
        if(details.username && details.email && details.phone){
            let res=await axios.post(`https://crudcrud.com/api/66c3317230a74493bea3963ce67ac2cd/userDetails`,details)
            console.log(res.data)
            let id=res.data._id

            displayUserDetails(details,id)

        }

    }
    catch(err){
        console.log(err)
    } 
    form.reset()
}

async function displayUserDetails(details,id) {
    try{
        let list=document.createElement('li')
        list.className='list'
        list.innerHTML=`userName:${details.username}, EmailId:${details.email},  Phone_No. :${details.phone}`

        let editBtn=document.createElement('button')
        editBtn.className='edit-btn'
        editBtn.textContent='Edit'
        list.appendChild(editBtn)

        let deleteBtn=document.createElement('button')
        deleteBtn.className='del-btn'
        deleteBtn.textContent='Delete'
        list.appendChild(deleteBtn)


        userList.appendChild(list)

        editBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            updateFunction(details,list,id)
        })

        deleteBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            deleteFunction(list,id)
        })
    }
    catch(err){
        console.log(err)
    }
}

async function reload() {
    try{
        let res= await axios.get("https://crudcrud.com/api/66c3317230a74493bea3963ce67ac2cd/userDetails")
        let userData=res.data
        if(userData){
            for(let i=0;i<userData.length;i++){
                displayUserDetails(userData[i],userData[i]._id)
            }
        }

    }
    catch(err){
        console.log(err)
    }
}

async function updateFunction(details,list,id) {
    try{
        document.querySelector("[name='username']").value=details.username,
        document.querySelector("[name='email']").value=details.email,
        document.querySelector("[name='phone']").value=details.phone

        //remove eventListener 
        form.removeEventListener('submit',userDetails)

        async function updateDetails(e){
            e.preventDefault()
            try{
                let updateData={
                    username:document.querySelector("[name='username']").value,
                    email:document.querySelector("[name='email']").value,
                    phone:document.querySelector("[name='phone']").value
                }
                if(updateData){
                    await axios.put(`https://crudcrud.com/api/66c3317230a74493bea3963ce67ac2cd/userDetails/${id}`,updateData)

                    list.innerHTML=`userName: ${updateData.username}, email_Id: ${updateData.email}, Phone_no: ${updateData.phone}`

                    let editBtn=document.createElement('button')
                    editBtn.className='edit-btn'
                    editBtn.textContent='Edit'
                    list.appendChild(editBtn)

                    let deleteBtn=document.createElement('button')
                    deleteBtn.className='del-btn'
                    deleteBtn.textContent='Delete'
                    list.appendChild(deleteBtn)

                    editBtn.addEventListener('click',(e)=>{
                        e.preventDefault()
                        updateFunction(details,list,id)
                    })
                    deleteBtn.addEventListener('click',(e)=>{
                        e.preventDefault()
                        deleteFunction(list,id)
                    })
                }
                form.removeEventListener('submit',updateDetails)
                form.addEventListener('submit',userDetails)
                form.reset()
            }
            catch(err){
                console.log(err)
            }
        }
        form.addEventListener('submit',updateDetails)

    }
    catch(err){
        console.log(err)
    }
}

async function deleteFunction(list,id) {
    try{
        await axios.delete(`https://crudcrud.com/api/66c3317230a74493bea3963ce67ac2cd/userDetails/${id}`)
        list.remove()
    }
    catch(err){
        console.log(err)
    }
}