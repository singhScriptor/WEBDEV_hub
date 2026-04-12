function writeLetter(postLetter){
    setTimeout(()=>{
        console.log("Wrote letter")
        postLetter()
    },2000)
}
function postLetter(){
    setTimeout(()=>{
        console.log('Letter Posted')
    },1000)
}
writeLetter(postLetter)