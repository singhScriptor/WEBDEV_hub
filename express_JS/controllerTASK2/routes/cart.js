const express = require('express')

const router = express.Router()

const cartControl = require('../controllers/cartController')

router.get('/:id',cartControl.getUserCart)

router.post('/:id',cartControl.postUserCart)

module.exports=router