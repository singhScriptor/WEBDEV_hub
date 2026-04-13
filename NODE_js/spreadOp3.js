let mergeNestedObjects=((obj1,obj2)=>{
    let merges={...obj1, ...obj2}
    if(obj1.user && obj2.user){
        merges.user={...obj1.user, ...obj2.user}
    }
    if(obj1.settings && obj2.settings){
        merges.settings={...obj1.settings, ...obj2.settings}
    }
    return merges
})
let obj1={
    user:{
        name:'Alice',
        age:25
    },
    settings:{
        theme:'light',
    }
}

let obj2={
    user:{
        age:30,
        city:'Wonderland'
    },
    settings:{
        notification:true
    }
}
console.log(mergeNestedObjects(obj1,obj2))