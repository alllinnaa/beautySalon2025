const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AppointmentController');
router.post('/', AppointmentController.createAppointment.bind(AppointmentController));
module.exports = router;