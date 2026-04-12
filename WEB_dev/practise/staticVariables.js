class User{
    static count=0
    static userCount(){
        User.count++
    }
}
User.userCount()
console.log(User.count)

// 2nd method

class NewUser{
    static count=0
    constructor(name,email){
        this.name=name
        this.email=email
        NewUser.count++
    }
    static numberOfUser(){
         console.log(NewUser.count)
    }
}

n1=new NewUser("Dhiraj","drj@gmail.com")
let u2 = new NewUser("Yash", "Prasad");
let u3 = new NewUser("Anita", "Kumari");

NewUser.numberOfUser()