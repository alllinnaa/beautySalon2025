const Repository = require('../core/Repository');
const UserModel = require('../schemas/UserSchema');

class UserRepository extends Repository {
    constructor() {
        super(UserModel);
    }
    
}

module.exports = UserRepository;
