document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        window.location.href = 'welcome.html'; // Redirect to the welcome page on successful login
    } else {
        document.getElementById('error').textContent = 'Invalid username or password.';
    }
});
