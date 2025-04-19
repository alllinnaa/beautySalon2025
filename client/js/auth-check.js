document.addEventListener('DOMContentLoaded', () => {
    const protectedPages = ['profile.html', 'my-appointments.html', 'book-appointment.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            window.location.href = 'login.html';
        }
    }
});