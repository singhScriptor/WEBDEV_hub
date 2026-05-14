const path = require('path')

const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","product.html"))
}

const postProduct = (req,res)=>{
    const product = req.body
    console.log(product)
    req.json({message:'product added successfully',product})
}

module.exports={
    getProducts,
    postProduct
}