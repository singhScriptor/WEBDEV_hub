// event listener for reload
document.addEventListener('DOMContentLoaded',function(){
    reload()
    activateButton()
})


let form=document.getElementById('form')

//submit button  to add descriton input before this button inside form
let submit=document.getElementById('submit')

//userList.to appendChild i mean list
let userList=document.getElementsByClassName('user-list')[0]


//filter function
let filter=document.getElementById('filter')

filter.addEventListener("keyup",filterFunction)

async function filterFunction(e){
    try{
        let search=e.target.value.toLowerCase()
        let list=document.getElementsByClassName('fruit')
        for(let i=0;i<list.length;i++){
            let fruit=list[i].querySelector('span').textContent.toLowerCase()
            if(fruit.includes(search)){
                list[i].style.display=''
            }
            else{
                list[i].style.display='none'
            }
        }
    }
    catch(err){
        console.log("Error!",err)
    }
}

//creating description input
let desInput=document.createElement('input')
desInput.className='fruit-description p-2 rounded border-success'
desInput.type='text'
desInput.required=true 
desInput.placeholder='description here'
desInput.style.width='35%'
desInput.style.margin='5px'

// adding description input
form.insertBefore(desInput,submit)

// event listener for adding new fruitItems
form.addEventListener('submit',addFruitItem)

async function addFruitItem(e){
    try{
        e.preventDefault()
        let fruitDetails={
            fruit:document.getElementById('fruit-name').value,
            description:document.getElementsByClassName('fruit-description')[0].value
        }
        if(fruitDetails){
            console.log(fruitDetails)
            let id=Date.now()
            localStorage.setItem(id,JSON.stringify(fruitDetails))

            displayFruitDetails(fruitDetails,id)
        }
        form.reset()
    }
    catch(err){
        console.log(err)
    }
}

async function displayFruitDetails(fruitDetails,id) {
    try{
        let list=document.createElement('li')
        list.className='fruit'
        list.innerHTML=`
        <span>${fruitDetails.fruit}</span>
        <button type="button" class="edt-btn bg-warning rounded p-2 border-0 text-white ms-auto">Edit</button>
        <button type="button" class="del-btn bg-danger rounded p-2 border-0 text-white">X</button>
        <p>${fruitDetails.description}</p>
        `
        userList.appendChild(list)

        deleteFunction(list,id)
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function reload() {
    try{
        for(let i=0;i<localStorage.length;i++){
            let key=localStorage.key(i)
            let data=JSON.parse(localStorage.getItem(key))
            if(data){
                displayFruitDetails(data,key)
            }
        }
    }
    catch(err){
        console.log("Error!",err)
    }
}

async function  deleteFunction(list,id) {
    try{
        let delBtn=list.querySelector('.del-btn')
        delBtn.addEventListener('click',function(e){
            e.preventDefault()
            list.remove()
            if(id){
                localStorage.removeItem(id)
            }
        })
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function activateButton() {
    try{
        let list=document.getElementsByClassName('fruit')
        for(let i of list){
            deleteFunction(i)
            if(i.getElementsByClassName('edt-btn').length === 0){
                let editBtn=document.createElement('button')
                editBtn.className="edt-btn bg-warning rounded p-2 border-0 text-white ms-auto"
                editBtn.textContent="Edit"

                let delBtn=i.getElementsByClassName('del-btn')[0]
                i.insertBefore(editBtn,delBtn)
            }

        }
    }
    catch(err){
        console.log("error!",err)
    }
}

