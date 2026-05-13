const path = require('path')

//const productService = require('../services/productServices')

const getAllProducts = (req,res)=>{
    //const result = productService.getAllProducts()
    //console.log(result)

    res.sendFile(path.join(__dirname,"..","view","productMsg.html"))

}

module.exports={
    getAllProducts
}