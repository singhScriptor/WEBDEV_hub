function applyDiscounts(products){
    return products.map((product)=>{
        let discountedPrice=product.price*(1-product.discount)
        return {
            name:product.name,
            discountPrice:discountedPrice
        }
    })
}
let products =[{
    name: 'Laptop',

price: 1000,

discount: 0.1 },

{ name: 'Phone',

price: 500,

discount: 0.05

}]
console.log(applyDiscounts(products))