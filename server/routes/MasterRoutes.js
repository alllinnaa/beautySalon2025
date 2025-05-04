const express = require('express');
const router = express.Router();
const MasterController = require('../controllers/MasterController');

const masterController = new MasterController();

router.get('/by-service/:serviceId', masterController.getMastersByService.bind(masterController));
module.exports = router;