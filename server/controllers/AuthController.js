const AuthService = require('../services/AuthService');

class AuthController {
    constructor() {
        this.authService = new AuthService();
    }

    register = async (req, res) => {
        try {
            const user = await this.authService.register(req.body);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}

module.exports = new AuthController();
