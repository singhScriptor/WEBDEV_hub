let extraValues=(people,key)=>{
    return people.map((value)=>value[key])
}
let people=[
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]
console.log(extraValues(people,"name"))
console.log(extraValues(people,"age"))