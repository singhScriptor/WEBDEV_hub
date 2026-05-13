const express = require('express')

const router = express.Router()

const productCtrl = require('../controller/productControl')

router.get('/',productCtrl.getAllProducts)

module.exports=router


