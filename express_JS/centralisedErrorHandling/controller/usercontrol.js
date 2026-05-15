const userServices = require('../services/userService')
const { successResponse, errorResponse } = require('../utils/response')

const getAllUsers = (req, res) => {
    try {
        const result = userServices.allUsers()
        successResponse(res, result, "successfully fetched all users")
    }
    catch (err) {
        errorResponse(res, err)
    }
}

const postNewUser = (req, res) => {
    try {
        const result = userServices.addNewUser()
        successResponse(res, result, "successfully posted a new user")
    }
    catch (err) {
        errorResponse(res, err)
    }


}

const getUserById = (req, res) => {
    try {
        const id = req.params.id
        const result = userServices.findUserById(id)
        successResponse(res, result, "successfully found the user by Id")
    }
    catch (err) {
        errorResponse(res, err)
    }

}

module.exports = {
    getAllUsers,
    postNewUser,
    getUserById
}