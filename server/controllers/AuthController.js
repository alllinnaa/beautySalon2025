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

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await this.authService.login(email, password);
            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    };

    updateProfile = async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;
    
            if (updateData.email) {
                const existingUser = await this.authService.checkEmailExists(id, updateData.email);
                if (existingUser) {
                    throw new Error('Email already in use');
                }
            }
    
            if (!updateData.password) {
                delete updateData.password;
            }
    
            const updatedUser = await this.authService.updateProfile(id, updateData);
            res.status(200).json({ message: 'Profile updated', user: updatedUser });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();
