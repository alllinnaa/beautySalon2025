const Entity = require('../core/Entity');

class Service extends Entity{
    constructor({ name, description, price }) {
        super();
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

module.exports = Service;