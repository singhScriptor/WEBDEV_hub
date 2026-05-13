
const productServices = require('../services/productServices')

const getAllProducts = (req,res)=>{
    const result = productServices.getAllProducts()
    res.send(result)
}

const productById =(req,res)=>{
    const id = req.params.id
    const result = productServices.getProductById(id)
    res.send(result)
}

const newProduct =(req,res)=>{
    const result = productServices.addProduct()
    res.send(result)
}

module.exports={
    getAllProducts,
    productById,
    newProduct
}
