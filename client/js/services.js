document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:5000/api/services');
        
        if (!response.ok) {
            throw new Error('Failed to fetch services');
        }
        
        const services = await response.json();
        renderServices(services);
    } catch (error) {
        console.error('Error loading services:', error);
        alert('Error loading services. Please try again later.');
    }
});

function renderServices(services) {
    const container = document.getElementById('servicesContainer');
    container.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-img">${service.name}</div>
            <div class="service-info">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <p>Duration: ${service.duration} min</p>
                <p class="price">$${service.price}</p>
                <button class="book-btn" data-service-id="${service._id}">Book Now</button>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service-id');
            localStorage.setItem('selectedServiceId', serviceId);
            window.location.href = 'book-appointment.html';
        });
    });
}