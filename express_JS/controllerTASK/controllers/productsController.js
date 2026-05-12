const getProducts =(req,res)=>{
    res.send("Fetching all products")
}

const getProductsById = (req,res)=>{
    res.send(`Fetching product with ID:${req.params.id}`)
}

const postProducts=(req,res)=>{
    res.send("Adding a new product")
}

module.exports={
    getProducts,
    getProductsById,
    postProducts
}