const Repository = require('../core/Repository');
const AppointmentModel = require('../schemas/AppointmentSchema');

class AppointmentRepository extends Repository {
    constructor() {
        super(AppointmentModel);
    }

    async createAppointment(appointmentData) {
        try {
            const appointment = await this.model.create(appointmentData);
            return appointment;
        } catch (error) {
            console.error('Repository error:', error);
            throw error;
        }
    }
}

module.exports = AppointmentRepository;