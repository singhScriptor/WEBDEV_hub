let userList=document.getElementById('userlist')
let form=document.getElementById('form')

form.addEventListener('submit',addAppointment)



/*
async function addAppointment(e) {
    try{
        e.preventDefault()
        let details={
            username:document.getElementById('username').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
        }
        if(details){
            console.log(details)
            let id=Date.now()
            localStorage.setItem(id,JSON.stringify(details))
        }
        form.reset()
    }
    catch(err){
        console.log('Error!',err)
    }
}
*/

// storing data as an object

async function addAppointment(e) {
    try{
        e.preventDefault()
        let details={
            username:document.getElementById('username').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
        }
        if(details){
            let appointments=JSON.parse(localStorage.getItem('appointments'))|| []

            appointments.push({
                id:Date.now(),
                username:details.username,
                email:details.email,
                phone:details.phone
            })
            localStorage.setItem("appointments",JSON.stringify(appointments))

            console.log(appointments)

            displayAppointment(details)
        }
        form.reset()
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function displayAppointment(details) {
    try{
        let list=document.createElement('li')
        list.className='bg-secondary text-white border-0 rounded m-2 p-3'
        list.textContent=`User-name :${details.username}, email-Id : ${details.email}, phone : ${details.phone}`

        userList.appendChild(list)
    }
    catch(err){
        console.log("err!",err)
    }
}
