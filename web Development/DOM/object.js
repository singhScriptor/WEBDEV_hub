
const person = {
    age: 26,
    firstName: "Yash",
    lastName: "Prasad",
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'BLR',
        state: 'Karnataka'
    }
    
}
// for(let i in person){
//     if(i === 'address'){
//         console.log(person[i].city)
//     }
// }

//const {firstName,lastName}=person
// console.log(firstName)
// console.log(lastName)

//const {address}=person // this method is called destructureing 

//console.log(address.city)
//we can also use destructureing like this 
const {firstName,lastName,address:{city}}=person
console.log(city)

// You can add furter details too in person like 

person.email="dhirajkr1117@gmail.com"
console.log(person)


person.foeEach(()=>{
    console.log(person.address.city)
})