let form=document.getElementsByTagName("form")[0]

form.addEventListener('submit',addDetails)

function addDetails(e){
    e.preventDefault()
    let registredDetails={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        date:document.getElementById('date').value,
        time:document.getElementById('time').value
    }
    if(registredDetails){
        console.log(registredDetails)
    }
}
