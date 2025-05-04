const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    clientId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    masterId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Master',
        required: true 
    },
    serviceId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Service', 
        required: true 
    },
    appointmentDate: { 
        type: Date, 
        required: true,
        validate: {
            validator: function(value) {
                return value > new Date();
            },
            message: 'Appointment date must be in the future'
        }
    },
    appointmentEnd: { 
        type: Date 
    },
    status: { 
        type: String, 
        enum: ['not fulfilled', 'fulfilled', 'cancelled'], 
        default: 'not fulfilled' 
    },
    note: { 
        type: String,
        maxlength: 500 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
