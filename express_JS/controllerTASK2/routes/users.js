const express = require('express')

const router = express.Router()

const controllerHandle = require('../controllers/userController')

router.get('/',controllerHandle.getAllUser)

router.post('/',controllerHandle.postNewUser)

router.get('/:id',controllerHandle.getUserById)


module.exports=router
