function createTask(taskName){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let task={id:1,name:taskName}
            console.log("task created:",JSON.stringify(task))
            resolve(task)
        },1000)
    })
}
function completeTask(task){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let message=`Task '${task.name}' completed!`
            console.log(message)
            resolve(message)
        },1000)
    })
}
async function manageTasks(taskName) {
    try{
        let task=await createTask(taskName)
        let result=await completeTask(task)
        return result
    }
    catch(err){
        console.log(err)
    }
}
manageTasks("Write report")