let body=document.getElementsByTagName('body')[0]


let form=document.createElement('form')
form.style.backgroundColor='pink'
form.style.padding='25px'

let label=document.createElement('label')
label.textContent='Name :'
label.htmlFor="name"
form.appendChild(label)



let input=document.createElement('input')
input.type='text'
input.id="name"
form.appendChild(input)



let button1=document.createElement('button')
button1.className='btn'
button1.textContent="submit"
form.appendChild(button1)

let br=document.createElement('br')
form.insertBefore(br,button1)

let button2=document.createElement('button')
button2.className='btn'
button2.textContent="Reset"
form.appendChild(button2)


body.appendChild(form)

let inp=document.getElementById('name')
inp.style.height='25px'

//label styling using "for"

let labelStyle=document.querySelector('label[for="name"]')
labelStyle.style.fontStyle='italic'
labelStyle.style.marginRight="5px"

let buttons=document.getElementsByClassName('btn')
for(let i=0;i<buttons.length;i++){
    buttons[i].style.margin="2px"
    buttons[i].style.marginTop="25px"
    buttons[i].style.padding="10px"
}

