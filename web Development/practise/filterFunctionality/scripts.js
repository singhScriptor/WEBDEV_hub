document.addEventListener('DOMContentLoaded',reload)

let form=document.getElementsByTagName('form')[0]

let submit=document.getElementsByClassName('submit')[0]

let userList=document.getElementsByClassName('user-list')[0]

let filter=document.getElementById('search')

filter.addEventListener('keyup',filterFunction)


let input=document.createElement('input')
input.type='text'
input.className='fruit-des p-2 m-1 border-success rounded '
input.style.width='40%'
input.placeholder="Description Here"
input.required=true

submit.parentNode.insertBefore(input,submit)

form.addEventListener('submit',addFruit)

async function addFruit(e) {
    e.preventDefault()
    try{
        let fruitD={
            fruit:document.getElementsByClassName('add-fruit')[0].value,
            description:document.getElementsByClassName('fruit-des')[0].value
        }
        if(fruitD){
            console.log(fruitD)
            let userId=Date.now()
            localStorage.setItem(userId,JSON.stringify(fruitD))

            displayFruit(fruitD,userId)

        }
        form.reset()
    }
    catch(err){
        console.log('Error!',err)
    }
}
async function displayFruit(fruitD,userId) {
    try{
        let list=document.createElement('li')
        list.className='fruit-list rounded p-1'
        list.style.backgroundColor='beige'
        //list.style.display='block'
        list.innerHTML=`${fruitD.fruit} `
        // let span=document.createElement('span')
        // //span.className='fruit-name'
        // span.textContent=`${fruitD.fruit}`

        // list.appendChild(span)

        // list.appendChild(document.createElement('br'))

        let delBtn=document.createElement('button')
        delBtn.type='button'
        delBtn.className='del-btn rounded border-0 text-white bg-danger p-2'
        delBtn.textContent="X"
        delBtn.style.float='right'
        list.appendChild(delBtn)

        

        let p=document.createElement('p')
        p.className='fst-italic description'
        p.textContent=fruitD.description
        list.appendChild(p)


        userList.appendChild(list)

    }
    catch(err){
        console.log("Error!",err)
    }
}

async function filterFunction(e) {
    try{
        //e.preventDefault()
        let text=e.target.value.toLowerCase()
        let fruitItem=document.getElementsByClassName('fruit-list')
        for(let i=0;i<fruitItem.length;i++){
            let fruitName=fruitItem[i].textContent.toLowerCase()


            if(fruitName.includes(text)){
                fruitItem[i].style.display="list-item";
            }
            else{
                fruitItem[i].style.display="none"
            }
        }
    }
    catch(err){
        console.log(err)
    }
}
async function reload() {
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i)
        let data=JSON.parse(localStorage.getItem(key))
        if(data){
            displayFruit(data,key)
        }
    }
}




