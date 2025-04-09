const User = require('../models/User');
const UserRepository = require('../repositories/UserRepository');

class AuthService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(userData) {
        const existingUser = await this.userRepository.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('Email already registered');
        }

        const user = new User(userData);
        return await this.userRepository.create(user);
    }
}

module.exports = AuthService;
