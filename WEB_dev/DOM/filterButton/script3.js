document.addEventListener('DOMContentLoaded',previousList)


let filter=document.getElementById('filter')
filter.addEventListener('keyup',filterFunction)

let form=document.getElementById('form')
let submit=document.getElementById('submit')

//creating  input field to put inide form
let input=document.createElement('input')
input.placeholder="description"
input.id="description"
input.style.padding='5px'
input.style.margin='5px'
input.style.width='20%'
input.style.borderRadius='5px'
input.style.border="2px solid lightSkyBlue"
//inserting input inside form
form.insertBefore(input,submit)



let userList=document.getElementsByClassName('fruits')[0]

submit.addEventListener('click',addFruits)

function addFruits(e){
    e.preventDefault()
    let fruitName=document.getElementById('fruit_name').value
    let descri=document.getElementById('description').value
    if(fruitName && descri){
        //console.log(fruitName)
        displayFruitName(fruitName,descri)
    }
    else{
        console.log("enter fruit Name")
    }
}

function displayFruitName(fruit_name,descri){
    let list=document.createElement('li')
    list.className='fruits'
    list.innerHTML=` <span style="font-weight:bold">${fruit_name}</span>`
    

    // let nameSpan = document.createElement('span')
    // nameSpan.textContent = fruit_name
    // nameSpan.style.fontWeight = 'bold'


    let paragraph=document.createElement('p')
    paragraph.className="fruits"
    paragraph.id="description"
    paragraph.innerHTML=`${descri}`
    paragraph.style.backgroundColor="blanchedalmond"
    paragraph.style.borderRadius='5px'
    paragraph.style.padding='10px'
    paragraph.style.fontStyle='italic'

    // list.appendChild(nameSpan)
    // list.appendChild(paragraph)

    let delBtn=document.createElement('button')
    delBtn.className='del-btn'
    delBtn.textContent='X'

    list.appendChild(delBtn)

    addEditButton(list)
    list.appendChild(paragraph)
    deleteFUnction(list)

    userList.appendChild(list)
    //userList.appendChild(paragraph)

}

function addEditButton(list){
    let edit=document.createElement('button')
    edit.className="edt-btn"
    edit.style.padding='5px'
    edit.style.borderRadius='5px'
    edit.style.backgroundColor='lightYellow'
    edit.style.color='blue'
    edit.style.margin='5px'
    edit.style.border='none'
    edit.textContent="🛠️"

    list.appendChild(edit)
}
function deleteFUnction(list){
    let delBtn=list.querySelector('.del-btn')
    delBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        list.remove()
    })
}
function previousList(){
    const item=userList.getElementsByTagName('li')
    for(let i of item){
        addEditButton(i)
        deleteFUnction(i)
    }
}

function filterFunction(e){
    e.preventDefault()
    let name=e.target.value.toLowerCase()
    let fruitName=document.getElementsByClassName('fruits')
    for(let i=0;i<fruitName.length;i++){
        let item=fruitName[i].textContent.toLowerCase()
        if(item.includes(name)){
            fruitName[i].style.display=''
        }
        else{
            fruitName[i].style.display='none'
        }
    }
}


