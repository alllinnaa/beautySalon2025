const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');

router.get('/', ServiceController.getAll);

module.exports = router;