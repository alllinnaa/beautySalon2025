document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Відображення даних
    document.getElementById('firstName').textContent = user.firstName;
    document.getElementById('lastName').textContent = user.lastName;
    document.getElementById('email').textContent = user.email;
    document.getElementById('phone').textContent = user.phone;
    document.getElementById('password').textContent = '••••••••';

    // Елементи форми
    const editFormContainer = document.getElementById('editFormContainer');
    const editProfileForm = document.getElementById('editProfileForm');
    const editButtons = document.querySelectorAll('.edit-btn');

    // Обробник кнопки редагування (тепер для першої кнопки)
    editButtons[0].addEventListener('click', () => {
        document.getElementById('editFirstName').value = user.firstName;
        document.getElementById('editLastName').value = user.lastName;
        document.getElementById('editEmail').value = user.email;
        document.getElementById('editPhone').value = user.phone;
        document.getElementById('editPassword').value = '';
        editFormContainer.style.display = 'block';
    });

    // Скасування
    document.querySelector('.cancel-btn').addEventListener('click', () => {
        editFormContainer.style.display = 'none';
    });

    // Відправка форми
    editProfileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const updatedData = {
            firstName: document.getElementById('editFirstName').value,
            lastName: document.getElementById('editLastName').value,
            email: document.getElementById('editEmail').value,
            phone: document.getElementById('editPhone').value,
            password: document.getElementById('editPassword').value || undefined
        };

        try {
            const response = await fetch(`http://localhost:5000/api/auth/profile/${user._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData)
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to update profile');
            }
            
            const data = await response.json();
            

            localStorage.setItem('user', JSON.stringify(data.user));
            location.reload();
        } catch (error) {
            alert(error.message);
            console.error('Update error:', error);
        }
    });
});