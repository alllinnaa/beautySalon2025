const Repository = require('../core/Repository');
const MasterModel = require('../schemas/MasterSchema');

class MasterRepository extends Repository {
    constructor() {
        super(MasterModel);
    }

    async getMastersByService(serviceId) {
        try {
            const result = await this.model.find({ services: serviceId }).exec();
            return result;
        } catch (error) {
            console.error('Repository error:', error);
            throw error;
        }
    }
}

module.exports = MasterRepository;