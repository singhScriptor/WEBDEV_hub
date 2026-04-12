document.addEventListener('DOMContentLoaded',()=>{
    reload()
    validateButton()
})

let form=document.getElementsByTagName('form')[0]

let userList=document.getElementsByClassName('user-list')[0]

// addEventListener
form .addEventListener('submit',addFruit)

async function addFruit(e) {
    try{
        e.preventDefault()
        let fruit=document.getElementsByClassName('add-fruit')[0].value;
        let userId=Date.now()
        if(fruit){
            console.log(fruit)
            localStorage.setItem(userId,JSON.stringify(fruit))

            displayFruit(fruit,userId)
        }
        form.reset()
    }
    catch(err){
        console.log(err)
    }
}
async function displayFruit(fruit,userId) {
    try{
        let list=document.createElement('li')
        list.className='fruit-list rounded d-flex p-2 '
        list.style.backgroundColor='beige'
        list.innerHTML=`${fruit} <button type="button" class="edt-btn rounded bg-warning p-2 border-0 ms-auto m-1">Edit</button> 
        <button type="button" class="del-btn rounded bg-danger border-0 p-2 text-white">X</button>  `

        userList.appendChild(list)

        deleteFruit(list,userId)

    }
    catch(err){
        console.log(err)
    }
}

async function deleteFruit(list,userId) {
    try{
        let del=list.getElementsByClassName('del-btn')[0]
        del.addEventListener('click',function(){
            list.remove()
            if(userId){
                localStorage.removeItem(userId)
            }
        })
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function validateButton(){
    try{
        let list=userList.getElementsByTagName('li')
        for(let i of list){
            deleteFruit(i)
        }
    }
    catch(err){
        console.log(err)
    }
}
async function reload() {
    try{
        for(let i=0;i<localStorage.length;i++){
            let key=localStorage.key(i)
            let data=JSON.parse(localStorage.getItem(key))
            if(data){
                displayFruit(data,key)
            }
        }
    }
    catch(err){
        console.log("Error!",err)
    }
}