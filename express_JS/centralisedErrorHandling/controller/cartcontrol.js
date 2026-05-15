const cartServices = require('../services/cartService')

const { successResponse, errorResponse } = require('../utils/response')

const getCart = (req, res) => {
    try {
        const userId = req.params.userId
        const result = cartServices.getCartDetails(userId)
        successResponse(res, result, "Cart fetched successfully")
    }
    catch (err) {
        errorResponse(res, err)
    }
}

const postCart = (req, res) => {
    try {
        const userId = req.params.userId
        const result = cartServices.postCartDetails(userId)
        successResponse(res, result, "Cart updated successfully")
    }
    catch(err){
        errorResponse(res,err)
    }
}

module.exports = {
    getCart,
    postCart
}