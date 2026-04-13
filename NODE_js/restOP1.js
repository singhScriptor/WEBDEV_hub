function collectArgs(...args){
    return {
        count:args.length,
        uniqueArgs:[...new Set(args)]
    }
}
console.log(collectArgs(1,2,2,3,4,5))