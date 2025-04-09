document.querySelector('.register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData = {
        firstName: document.querySelector('#first-name').value,
        lastName: document.querySelector('#last-name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        password: document.querySelector('#password').value,
        confirmPassword: document.querySelector('#confirm-password').value
    };

    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        alert(data.message || data.error);
    } catch (error) {
        console.error('Error:', error);
    }
});
