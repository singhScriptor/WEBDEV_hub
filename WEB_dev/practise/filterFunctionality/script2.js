document.addEventListener('DOMContentLoaded',reload)

let filter=document.getElementById('filter')

filter.addEventListener('keyup',filterFunction)

let delBtn=document.getElementsByClassName('del-btn')
for(let i=0;i<delBtn.length;i++){
    delBtn[i].addEventListener('click',deleteFunction)
}

let form=document.getElementById('form')


let list=document.getElementsByClassName('fruit')

let userList=document.getElementsByClassName('user-list')[0]


for(let i=0;i<list.length;i++){
    let edtButton=document.createElement('button')
    edtButton.className='edt-btn rounded border-0 bg-warning ms-auto p-2 text-white'
    edtButton.textContent='edit'

    let delButton=list[i].getElementsByClassName('del-btn')[0]
    
    list[i].insertBefore(edtButton,delButton)
}

let paragraphInput=document.createElement('input')
paragraphInput.className='fruit-description p-2 border-success rounded'
paragraphInput.id='fruit-description'
paragraphInput.type='text'
paragraphInput.style.width='40%'
paragraphInput.style.margin='5px'
paragraphInput.placeholder='Description'
paragraphInput.required=true

let submit=document.getElementById('submit')

form.insertBefore(paragraphInput,submit)

form.addEventListener('submit',addFruit)

async function addFruit(e) {
    try{
        e.preventDefault()
        let fruitDetail={
            fruit:document.getElementById('fruit-name').value,
            description:document.getElementById('fruit-description').value,
        }
        if(fruitDetail){
            let id=Date.now()
            localStorage.setItem(id,JSON.stringify(fruitDetail))
            console.log(fruitDetail)

            displayFruit(fruitDetail,id)
        }
        form.reset()
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function displayFruit(fruitDetail,id){
    try{
        let list=document.createElement('li')
        list.className='fruit '
        list.innerHTML=`<span>${fruitDetail.fruit}</span>`

        let editBtn=document.createElement('button')
        editBtn.className='edt-btn rounded p-2 bg-warning text-white ms-auto border-0'
        editBtn.textContent='Edit'

        list.appendChild(editBtn)

        let delBtn=document.createElement('button')
        delBtn.className='del-btn bg-danger rounded p-2 text-white border-0'
        delBtn.style.float='right'
        delBtn.textContent='X'
        list.appendChild(delBtn)

        delBtn.addEventListener('click',function(e){
            e.preventDefault()
            list.remove()
            localStorage.removeItem(id)
        })


        list.appendChild(document.createElement('br'))

        let paragraph=document.createElement('p')
        paragraph.id='description'
        paragraph.innerHTML=`${fruitDetail.description}`

        list.appendChild(paragraph)

        userList.appendChild(list)


    }
    catch(err){
        console.log("Error!",err)
    }
}



async function filterFunction(event) {
    try{
        let search=event.target.value.toLowerCase()
        let item=document.getElementsByClassName('fruit')
        for(let i=0;i<item.length;i++){
            let text=item[i].querySelector('span').textContent.toLocaleLowerCase()
            if(text.includes(search)){
                item[i].style.display=''
            }
            else{
                item[i].style.display='none'
            }
        }
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function deleteFunction(e) {
    try{
        e.preventDefault()
        let list=e.target.parentElement

        list.remove()
        

    }
    catch(err){
        console.log("error!",err)
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
        console.log('Error!',err)
    }
}