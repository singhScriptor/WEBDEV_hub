let form=document.getElementById('form')
let submit=document.getElementById('submit')
let userList=document.getElementById('ul')

submit.addEventListener('click',showData)

function showData(e){
    e.preventDefault()
    let userData={
        username:document.getElementById('username').value,
        email:document.getElementById('email').value,
        number:document.getElementById('mobile').value

    }
    if(userData.username && userData.email && userData.number){
        console.log(userData)
        showDataOnDisplay(userData)
    }
    else{
        console.log('add details first')
    }
}

function showDataOnDisplay(userData){
     userList.innerHTML=`
     <li>
     <strong>UserName:</strong>${userData.username} 
     <strong>EmailId:</strong> ${userData.email} 
     <strong> Number:</strong> ${userData.number}
     </li>
     `
}

