require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./configuration/db');
const authRoutes = require('./routes/AuthRoutes');
const serviceRoutes = require('./routes/ServiceRoutes');
const masterRoutes = require('./routes/MasterRoutes');
const appointmentRoutes = require('./routes/AppointmentRoutes');



const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/masters', masterRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));






