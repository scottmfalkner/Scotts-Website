document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});

const signUpButton = document.getElementById('show-signup');
const loginButton = document.getElementById('show-login');
const signUpForm = document.getElementById('signup');
const loginForm = document.getElementById('login');

signUpButton.addEventListener('click', () => {
    signUpForm.style.display = 'block';
    loginForm.style.display = 'none';
});

loginButton.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
});

document.getElementById('signup-submit').addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;
    if(username && password) {
        alert('Sign Up Successful!');
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('login-submit').addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    if(username && password) {
        alert('Login Successful!');
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    if(email) {
        // Here you would typically send the email to your server
        window.location.href = 'thankyou.html'; // Redirect to thank you page
    } else {
        alert('Please enter your email.');
    }
});
