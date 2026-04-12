function checkWeather(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isSunny=Math.random()>0.5
            if(isSunny){
                resolve("Let us go for picnic")
            }
            else{
                reject("Error: It is cloudy")
            }
        },3000)
    })
}
async function  main() {
    try{
        let res=await checkWeather()
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
}
main()