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

    async login(email, password) {
        const user = await this.userRepository.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        if (user.password !== password) {
            throw new Error('Invalid email or password');
        }

        return user;
    }

    async updateProfile(id, updateData) {
        return await this.userRepository.update(id, updateData);
    }

    async checkEmailExists( email) {
        return await this.userRepository.findOne({
            email: email
        });
    }
}

module.exports = AuthService;