class Student{
    constructor(firstname,lastname,rollnumber,age){
        this.firstname=firstname
        this.lastname=lastname
        this.rollnumber=rollnumber
        this.age=age
    }
    printFullName(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
    minorOrMajor(){
        if(this.age >= 18)console.log("major")
        else console.log('minor')    
    }
}
let s1=new Student("Yash","Prasad",12,26)
s1.printFullName()
s1.minorOrMajor()
let s2=new Student("Ram","Prasad",14,15)
s2.printFullName()
s2.minorOrMajor()