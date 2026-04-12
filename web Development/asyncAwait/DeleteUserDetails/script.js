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
            let res=await axios.post(`https://crudcrud.com/api/edf1135c57db422ab082dadf63064609/userDetails`,details)
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
        list.innerHTML=`UserName:${details.username}, EmailId:${details.email},  Phone_No. :${details.phone}`

        let deleteBtn=document.createElement('button')
        deleteBtn.className='del-btn'
        deleteBtn.textContent='Delete'
        list.appendChild(deleteBtn)


        userList.appendChild(list)

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
        let res= await axios.get("https://crudcrud.com/api/edf1135c57db422ab082dadf63064609/userDetails")
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

async function deleteFunction(list,id) {
    try{
        await axios.delete(`https://crudcrud.com/api/edf1135c57db422ab082dadf63064609/userDetails/${id}`)
        list.remove()
    }
    catch(err){
        console.log(err)
    }
}