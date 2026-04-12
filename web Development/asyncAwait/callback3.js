function learnJavaScript(learnJavaScript){
    setTimeout(()=>{
        console.log('javaScript Learned')
        learnJavaScript()
    },2000)
}
function learnReact(){
    setTimeout(()=>{
        console.log('React Learned')
    },1000)
}
learnJavaScript(learnReact)