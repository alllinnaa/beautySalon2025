const MasterRepository = require('../repositories/MasterRepository');

class MasterService {
    constructor() {
        this.masterRepository = new MasterRepository();
    }

    async getMastersByService(serviceId) {
        try {
            return await this.masterRepository.getMastersByService(serviceId);
        } catch (error) {
            console.error('Service error:', error);
            throw error;
        }
    }
}

module.exports = MasterService;