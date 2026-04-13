function collectArgs(...args){
    return {
        count:args.length,
        uniqueArgs:[... new Set(args)]
    }
}
let args=[1,2,2,3,4]
console.log(collectArgs(...args))

// even seperate the value  

function cArgs(n,...args){
    return {
        n:n,
        count:args.length,
        array:args
    }
}
let ar=[1,2,3],n=12
console.log(cArgs(n,...ar))