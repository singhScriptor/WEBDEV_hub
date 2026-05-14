const express = require('express')

const router = express.Router()

const controlProduct = require("../controller/productControl")

router.get('/',controlProduct.productDetails)

module.exports=router