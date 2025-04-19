document.querySelector('.logout-btn')?.addEventListener('click', function() {
    if(confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    }
});

