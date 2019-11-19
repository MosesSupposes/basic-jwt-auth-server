const express = require('express')

const UsersController = require('../controllers/UsersController')
const { validateFields } = require('../middleware/validateFields')

const router = express.Router()

router.route('/register')
    .all(validateFields(['username', 'password']))
    .post(UsersController.register)

router.route('/login')
    .all(validateFields(['username', 'password']))
    .post(UsersController.login)

module.exports = router