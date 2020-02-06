const express = require('express');
const router = express.Router();
const users = require('../models/Users');
const userController = require('../controllers/userController')


router.get('/', userController.getAllUsers);

router.get('/:id', userController.getSingleUser);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;