document.addEventListener('DOMContentLoaded', async () => {
    await loadServices();

    await loadServices();


    document.getElementById('service').addEventListener('change', async (e) => {
        const serviceId = e.target.value;
        if (serviceId) {
            await loadServiceDetails(serviceId);
        } else {
            document.getElementById('specialist').innerHTML = 
                '<option value="">-- No preference --</option>';
        }
    });
    document.getElementById('booking-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        await submitAppointment();
    });
});

async function loadServices() {
    try {
        const response = await fetch('http://localhost:5000/api/services');
        if (!response.ok) throw new Error('Failed to fetch services');
        
        const services = await response.json();
        const select = document.getElementById('service');
        
        select.innerHTML = '<option value="">-- Choose a service --</option>';
        services.forEach(service => {
            select.innerHTML += `<option value="${service._id}">${service.name} - $${service.price}</option>`;
        });
        
    } catch (error) {
        console.error('Error loading services:', error);
        alert('Error loading services. Please try again later.');
    }
}

async function loadServiceDetails(serviceId) {
    const select = document.getElementById('specialist');
    try {
        select.disabled = true;
        select.innerHTML = '<option value="">Loading specialists...</option>';
        
        const response = await fetch(`http://localhost:5000/api/masters/by-service/${serviceId}`);
        
        if (!response.ok) throw new Error('Failed to fetch specialists');
        
        const masters = await response.json();
        
        select.innerHTML = '';
        
        if (masters && masters.length > 0) {
            masters.forEach(master => {
                select.innerHTML += `<option value="${master._id}">${master.firstName} ${master.lastName}</option>`;
            });
        }
        
    } catch (error) {
        console.error('Error loading specialists:', error);
        select.innerHTML = '<option value="">-- Error loading specialists --</option>';
    } finally {
        select.disabled = false;
    }
}

async function submitAppointment() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Please log in to book an appointment.');
        window.location.href = 'login.html';
        return;
    }

    const specialist = document.getElementById('specialist').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!specialist || !service || !date || !time) {
        alert('Please fill all required fields');
        return;
    }

    try {
        const appointmentDate = new Date(`${date}T${time}:00`);

        const formData = {
            clientId: user._id,
            masterId: specialist || null,
            serviceId: service,
            appointmentDate: appointmentDate.toISOString(),
            note: document.getElementById('notes').value || ''
        };

        const response = await fetch('http://localhost:5000/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.error || 'Failed to book appointment');
        }

        alert('Appointment booked successfully!');
    } catch (error) {
        console.error('Error details:', error);
        alert(`Error: ${error.message}`);
    }
}