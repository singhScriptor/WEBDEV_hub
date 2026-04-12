let postBtn=document.getElementById('post-btn')

postBtn.addEventListener('click',postTodo)


let getBtn=document.getElementById('get-btn')

getBtn.addEventListener('click',getTodo)

let putBtn=document.getElementById('put-btn')

putBtn.addEventListener('click',putTodo)


let delBtn=document.getElementById('delete-btn')

delBtn.addEventListener('click',deleteTodo)

function postTodo(e){
    e.preventDefault()
    axios.post("https://crudcrud.com/api/edf1135c57db422ab082dadf63064609/postData",{
        title:"Learn Axios",
        completed:false
    })
    .then(res=>console.log("Posted:",res.data))
    .catch(err=>console.log(err))
}

function getTodo(e){
    e.preventDefault()
    axios.get("https://crudcrud.com/api/edf1135c57db422ab082dadf63064609/postData")
    .then(res=>console.log("fetched",res.data))
    .catch((err)=>console.log(err))
}

function putTodo(e){
    e.preventDefault()
    let id="69a3cb1307446203e8d3a7dd"
    axios.put(`https://crudcrud.com/api/edf1135c57db422ab082dadf63064609/postData/${id}`,{
        title:"Learn Axios",
        completed:true
    })
    .then((res)=>console.log("updated",res.data))
    .catch((err)=>console.log(err))
}

function deleteTodo(e){
    e.preventDefault()
    let id="69a3cb1407446203e8d3a7e0"
    axios.delete(`https://crudcrud.com/api/edf1135c57db422ab082dadf63064609/postData/${id}`)
    .then((res)=>console.log("deleted",res.data))
    .catch((err)=>console.log(err))
}

