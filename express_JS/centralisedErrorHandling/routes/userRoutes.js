const express = require('express')

const router = express.Router()

const controlUsers = require('../controller/usercontrol')

router.get('/',controlUsers.getAllUsers)

router.post('/',controlUsers.postNewUser)

router.get('/:id',controlUsers.getUserById)

module.exports=router