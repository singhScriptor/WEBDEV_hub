let counter={
    count:0,
    increment:function(){
        this.count++
        return this.count
    },
    incrementWithDelay:function(ms){
        setTimeout(function(){
            counter.count++
            console.log(counter.count)
        },ms)
    }
}

console.log(counter.increment())
counter.incrementWithDelay(100)