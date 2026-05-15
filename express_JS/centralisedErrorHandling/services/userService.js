const allUsers = ()=>{
    return "Fetching all users"
}

const addNewUser = ()=>{
    return "Adding a new user"
}

const findUserById =(id)=>{
    return `Fetching user with Id:${id}`
}

module.exports = {
    allUsers, 
    addNewUser,
    findUserById
}