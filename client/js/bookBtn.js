document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert('Please log in to book an appointment');
            window.location.href = 'login.html';
            return;
        }
        window.location.href = 'book-appointment.html';
    });
});