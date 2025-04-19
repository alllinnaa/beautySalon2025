const Service = require('../models/Service');
const ServiceRepository = require('../repositories/ServiceRepository');

class ServiceService {
    constructor() {
        this.serviceRepository = new ServiceRepository();
    }

    async getAllServices() {
        return await this.serviceRepository.getAll();
    }
}

module.exports = ServiceService;