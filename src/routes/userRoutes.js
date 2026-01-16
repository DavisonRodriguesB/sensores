const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/user', userController.getAll);
router.post('/user', userController.create);

module.exports = router;