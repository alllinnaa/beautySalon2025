const Repository = require('../core/Repository');
const UserModel = require('../schemas/UserSchema'); // Mongoose модель

class UserRepository extends Repository {
    constructor() {
        super(UserModel);
    }
}

module.exports = UserRepository;
