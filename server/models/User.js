const Entity = require('../core/Entity');

class User extends Entity {
    constructor({ firstName, lastName, email, phone, password }) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}

module.exports = User;
