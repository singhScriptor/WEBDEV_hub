const productServices = require('../services/productService')
const {successResponse, errorResponse } = require('../utils/response')



const getAllProducts = (req, res) => {

    try {
        const result = productServices.getAllProducts()
        successResponse(res, result, 'successfully fetched all products')
    }
    catch (err) {
        errorResponse(res, err)
    }
}

const addProduct = (req, res) => {
    try {
        const result = productServices.addProduct()
        successResponse(res, result, 'successfully added a new product')
    }
    catch (err) {
        errorResponse(res, err)
    }
}

const getProductById = (req, res) => {
    try {
        const id = req.params.id
        const result = productServices.getProductById(id)
        successResponse(res, result, 'successfully found the specific product')
    }
    catch (err) {
        errorResponse(res, err)
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
}