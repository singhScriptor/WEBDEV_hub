const describe=((name,age, ...hobies)=>{
    return (`${name} is ${age} and enjoys ${hobies}`)
})
console.log(describe('John', 30, 'engineer', 'hiking'))