document.addEventListener('DOMContentLoaded',loaded)

let form=document.getElementById('form')

let submit=document.getElementById('submit')

let userList=document.getElementById('user-list')

form.addEventListener('submit',addUser)

function addUser(e){
    e.preventDefault()
    let user_details={
        userName:document.getElementById('username').value,
        emailId:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    }
    if(user_details){
        console.log(user_details)
        displayUsers(user_details)
        localStorage.setItem(user_details.phone,JSON.stringify(user_details))
    }
}
 
function displayUsers(user_details){
    let list=document.createElement('li')
    list.className='user-data'
    list.style.backgroundColor='rgba(255,255,255,0.3)'
    list.style.padding='10px'
    list.style.margin='5px'
    list.style.borderRadius='5px'
    list.style.listStyleType='none'
    list.textContent=`UserName :${user_details.userName} EmailId : ${user_details.emailId}  Phone_No. : ${user_details.phone}`
    userList.appendChild(list)
}

function loaded(){
    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        const userData=JSON.parse(localStorage.getItem(key))
        displayUsers(userData)
    }
}

