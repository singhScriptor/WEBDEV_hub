const express=require('express')
const router = express.Router()
const controlProducts=require('../controller/productcontrol')

router.get('/',controlProducts.getAllProducts)
router.post('/',controlProducts.addProduct)
router.get('/:id',controlProducts.getProductById);


module.exports = router