const MasterService = require('../services/MasterService');

class MasterController {
    constructor() {
        this.masterService = new MasterService();
    }

    async getMastersByService(req, res) {
        try {
            const { serviceId } = req.params;
            const masters = await this.masterService.getMastersByService(serviceId);
            res.status(200).json(masters);
        } catch (error) {
            console.error('Controller error:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = MasterController;