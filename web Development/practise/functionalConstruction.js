function Person(firstname,lastname,age,sex){
    this.firstname=firstname
    this.lastname=lastname
    this.age=age 
    this.sex=sex
}
Person.prototype.findEligibleOrNot=function(minAge){
    if(this.age >= minAge){
        console.log("ELIGIBLE")
    }
    else console.log("NOT ELIGIBLE")
}

let p1=new Person("Dhiraj","Singh",25,'Male')
p1.findEligibleOrNot(18)

let p2=new Person("Saurav","Singh",17,"Male")
p2.findEligibleOrNot(18)