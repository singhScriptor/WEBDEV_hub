let personDetails={
    age:25,
    firstName:"Dhiraj",
    lastName:"Singh",
    hobbies:["F1","Cricket","music","movies"],
    address:{
        street:"Ganesh Path",
        Area:"Boring Road",
        state:"Bihar"
    }
}

console.log(personDetails.hobbies[3])
console.log(personDetails.address.state)


//destructuring method
let {age}=personDetails
console.log(age)

let {address:{state}}=personDetails
console.log(state)