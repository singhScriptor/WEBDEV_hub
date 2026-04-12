function buyBike(planTrip){
    setTimeout(()=>{
        console.log("Bought Royal Enfield Himalayan")
        planTrip()
    },2000)
}
function planTrip(){
    setTimeout(()=>{
        console.log("Trip to ladakh planned")
    },1000)
}
buyBike(planTrip)
