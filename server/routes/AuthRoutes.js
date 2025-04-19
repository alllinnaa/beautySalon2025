const express = require('express');
const AuthController = require('../controllers/AuthController');
const { validateUserData, validateLoginData,validateUpdateProfile } = require('../middlewares/ValidationMiddleware');

const router = express.Router();

router.post('/register', validateUserData, AuthController.register);
router.post('/login', validateLoginData, AuthController.login);
router.put('/profile/:id', validateUpdateProfile, AuthController.updateProfile);

module.exports = router;