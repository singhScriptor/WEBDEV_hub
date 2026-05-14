const express = require('express')

const router = express()

const controlProducts = require('../controller/productControl')

router.get('/',controlProducts.getProducts)

router.post('/',controlProducts.postProduct)

module.exports=router