class User{
    static count = 0
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
        User.count++
    }
    printNumberOfUser(){
        console.log(User.count)
    }
}
class Member extends User{
    constructor(username,email,password){
        super(username,email,password)
        this.membershipValidity=new Date(2025,11,30)
        this.package= "membershipPackageName"
    }
    purchasePackage(membershipName){
        this.package=membershipName

        if(this.package === "MONTHLYPACKAGE"){
            this.membershipValidity=new Date(2025,11,30)
        }
        else if(this.package === "YEARLYPACKAGE"){
            this.membershipValidity=new Date(2026, 11, 30)
        }
    }

}
let m1 = new Member("Dhiraj", "d@example.com", "1234");
m1.purchasePackage("MONTHLYPACKAGE");
console.log(m1.membershipValidity);