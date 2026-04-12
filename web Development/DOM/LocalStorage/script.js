let form=document.getElementById('form')
//let submit=document.getElementById('submit')

form.addEventListener('submit',userDetails)

function userDetails(e){
    e.preventDefault()
    let user_details={
        name:document.getElementById('username').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    }
    if(user_details){
        console.log(user_details)
        localStorage.setItem(user_details.phone,JSON.stringify(user_details))
    }
}

