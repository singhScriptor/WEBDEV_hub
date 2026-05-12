const express = require('express')

const productController = require('../controllers/productsController.js')

const router = express.Router()

router.get('/',productController.getProducts)

router.get('/:id',productController.getProductsById)

router.post('/',productController.postProducts)


module.exports=router