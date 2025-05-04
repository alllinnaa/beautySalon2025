const Entity = require('../core/Entity');
class Master extends Entity {
    constructor({ firstName, lastName, email, phone, services }) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.services = services;
    }
}
module.exports = Master;