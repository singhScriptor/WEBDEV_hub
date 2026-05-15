const express = require('express')

const router = express.Router()

const controlCart = require('../controller/cartcontrol')

router.get('/:userId',controlCart.getCart)
router.post('/:userId',controlCart.postCart)

module.exports =router