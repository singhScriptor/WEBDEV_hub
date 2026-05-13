const express= require('express')

const router = express.Router()

const productControl = require('../controllers/productController.js')

router.get('/',productControl.getAllProducts)

router.post('/',productControl.postNewProducts)

router.get('/:id',productControl.productById)


module.exports=router