function task1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Task 1 completed")
        },2000)
    })
}
function task2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Task 2 completed")
        },1000)
    })
}
function allTaskCompleted(){
    return new Promise((resolve)=>{
        resolve("All tasks completed")
    })
}
task1()
.then((res)=>{
    console.log(res)
    return task2()
})
.then((res)=>{
    console.log(res)
    return allTaskCompleted()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})