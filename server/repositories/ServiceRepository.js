const Repository = require('../core/Repository');
const ServiceModel = require('../schemas/ServiceSchema');

class ServiceRepository extends Repository {
    constructor() {
        super(ServiceModel);
    }
    
    async getAll() {
        return await this.model.find({});
    }
}

module.exports = ServiceRepository;