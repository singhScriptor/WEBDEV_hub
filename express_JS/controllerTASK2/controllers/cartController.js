const getUserCart = (req,res)=>{
    res.send(`<p>Fetching cart for user with ID:<span>${req.params.id}</span></p>`)
}

const postUserCart = (req,res)=>{
    res.send(`<p>Adding product to cart for user with ID:<span>${req.params.id}</span></p>`)
}

module.exports={
    getUserCart,
    postUserCart
}