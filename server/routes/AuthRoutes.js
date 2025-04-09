const express = require('express');
const AuthController = require('../controllers/AuthController');
const validateUserData = require('../middlewares/ValidationMiddleware');

const router = express.Router();

router.post('/register', validateUserData, AuthController.register);

module.exports = router;
