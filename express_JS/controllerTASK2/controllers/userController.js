const getAllUser = (req,res)=>{
    res.send('Fetching all users')
}

const postNewUser = (req,res)=>{
    res.send("Adding a new user")
}

const getUserById = (req,res)=>{
     res.send(`<p>Fetching user with ID:<span>${req.params.id}</span></p>`)
}

module.exports={
    getAllUser,
    postNewUser,
    getUserById
}