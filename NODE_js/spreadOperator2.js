function mergingSimpleObject(obj1,obj2){
    return {...obj1, ...obj2}
}
const obj1 = { a: 1, b: 2, };

const obj2 = { b: 3, c: 4, };

console.log(mergingSimpleObject(obj1,obj2))