const getAllProducts = (req,res)=>{
    res.send('Fetching all products')
}

const postNewProducts = (req,res)=>{
    res.send('Adding a new product')
}

const productById = (req,res)=>{
    res.send(`<p>Fetching product wit ID:<span>${req.params.id}</span></p>`)
}

module.exports={
    getAllProducts,
    postNewProducts,
    productById
}