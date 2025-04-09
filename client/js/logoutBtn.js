document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to log out?')) {
        window.location.href = 'login.html';
    }
});

document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        window.location.href = 'book-appointment.html';
    });
});