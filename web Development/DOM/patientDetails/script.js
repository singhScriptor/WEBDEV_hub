let form=document.getElementsByTagName('form')[0]
form.addEventListener('submit',addDetails)

function addDetails(event){
    event.preventDefault()
    let patient={
        name:event.target.name.value,
        age:event.target.age.value,
        gender:event.target.gender.value,
        phone:event.target.phone.value
    }
    if(patient){
        console.log("patinet detail is ",patient)
    }
}