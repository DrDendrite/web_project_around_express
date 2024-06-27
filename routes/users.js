const express = require("express");
const userController = require('../controllers/users');
const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/', userController.createUser);
router.patch('/me', userController.updateUserProfile);
router.patch('/me/avatar', userController.updateUserAvatar);

module.exports = router;