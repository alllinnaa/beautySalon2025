const AppointmentService = require('../services/AppointmentService');

class AppointmentController {
    constructor() {
        this.appointmentService = new AppointmentService(); 
    }

    async createAppointment(req, res) {
        try {
            
            if (!req.body.clientId || !req.body.masterId || !req.body.serviceId || !req.body.appointmentDate) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            if (isNaN(new Date(req.body.appointmentDate).getTime())) {
                return res.status(400).json({ error: 'Invalid date format' });
            }

            const appointment = await this.appointmentService.createAppointment(req.body);
            return res.status(201).json(appointment);
        } catch (error) {
            console.error('Appointment creation error:', error);
            return res.status(400).json({ error: error.message });
        }
    }
}


module.exports = new AppointmentController();