const path = require ('path')

const productDetails = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","product.html"))
}

module.exports={
    productDetails
}
