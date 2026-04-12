function planTrip(gotTrip){
    setTimeout(()=>{
        console.log('trip planned')
        gotTrip()
    },2000)
}
function gotTrip(){
    setTimeout(()=>{
        console.log('going Goa')
    },1000)
}
planTrip(()=>{
    gotTrip(()=>{
        console.log('Reached goa')
    })
})