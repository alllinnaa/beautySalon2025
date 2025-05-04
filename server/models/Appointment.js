const Entity = require('../core/Entity');
class Appointment extends Entity {
    constructor({ clientId, masterId, serviceId, appointmentDate, note, appointmentEnd, status }) {
        super();
        this.clientId = clientId;
        this.masterId = masterId;
        this.serviceId = serviceId;
        this.appointmentDate = appointmentDate;
        this.note = note;
        this.appointmentEnd=appointmentEnd;
        this.status = status;
    }
}
module.exports = Appointment;