const express = require('express')

const router = express.Router()

const controlProducts = require('../controllers/productController')

router.get('/',controlProducts.getAllProducts)
router.get('/:id',controlProducts.productById)
router.post('/',controlProducts.newProduct)


module.exports=router