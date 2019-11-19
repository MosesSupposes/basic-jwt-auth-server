const express = require('express')

const requireValidToken = require('../middleware/requireValidToken')
const UsersController = require('../controllers/UsersController')

const router = express.Router()

router.route('/')
    .all(requireValidToken)
    .get(UsersController.index)

module.exports = router