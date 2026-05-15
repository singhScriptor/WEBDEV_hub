const getCartDetails = (userId)=>{
    return `Fetching cart for user with ID: ${userId}`
}

const postCartDetails = (userId)=>{
    return `Adding product to cart for user with ID: ${userId}`
}

module.exports = {
    getCartDetails,
    postCartDetails
}
