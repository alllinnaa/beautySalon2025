const ServiceService = require('../services/ServiceService');

class ServiceController {
    constructor() {
        this.serviceService = new ServiceService();
    }

    getAll = async (req, res) => {
        try {
            const services = await this.serviceService.getAllServices();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ServiceController();