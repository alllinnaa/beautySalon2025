const AppointmentRepository = require('../repositories/AppointmentRepository');
const ServiceModel = require('../schemas/ServiceSchema');

class AppointmentService {
    constructor() {
        this.appointmentRepository = new AppointmentRepository();
    }

    async createAppointment(appointmentData) {
        try {         
            if (!appointmentData.clientId || !appointmentData.serviceId || !appointmentData.masterId || !appointmentData.appointmentDate) {
                throw new Error('Missing required fields');
            }

            const service = await ServiceModel.findById(appointmentData.serviceId);
            if (!service) {
                throw new Error('Service not found');
            }

            appointmentData.duration= service.duration;
    
            const start = new Date(appointmentData.appointmentDate);
            const end = new Date(start.getTime() + service.duration * 60000);
    
            const startHour = start.getHours();
            const endHour = end.getHours();
            if (startHour < 9 || endHour >= 19 || (endHour === 18 && end.getMinutes() > 0)) {
                throw new Error('Appointments must be between 09:00 and 19:00');
            }
    
            const conflict = await this.appointmentRepository.model.findOne({
                masterId: appointmentData.masterId,
                $or: [
                    {
                        appointmentDate: { $lt: end },
                        appointmentEnd: { $gt: start }
                    }
                ]
            });
    
            if (conflict) {
                throw new Error('Master is already booked during this time');
            }
    
            appointmentData.appointmentEnd = end;
    
            return await this.appointmentRepository.createAppointment(appointmentData);
        } catch (error) {
            console.error('Error in AppointmentService:', error);
            throw error;
        }
    }
}


module.exports = AppointmentService;