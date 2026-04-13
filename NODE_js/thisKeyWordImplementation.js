const counter={
    count:0,
    increment:function(){
        this.count++
        return this.count
    },
    reset:function(){
        this.count=0
        return this.count
    }

}