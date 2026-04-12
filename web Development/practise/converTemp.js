function convertTemperature(tempValue,conversionUnit){
    return conversionUnit === 'K' ? tempValue+273 :
    tempValue-273
}
let tempValue=308,conversionUnit="C"
console.log(convertTemperature(tempValue,conversionUnit))