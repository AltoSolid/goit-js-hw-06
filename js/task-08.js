
const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector('input[name="email"]');
    const password = form.querySelector('input[name="password"]');

    const emailValue = email.value;
    const passwordValue = password.value;

    if (email === '' || passwordValue === '') {
        alert('please fill in all fields.');
        return;
    }

    const formInfo = {
        email: emailValue,
        password: passwordValue
    }
    console.log(formInfo);
    form.reset();
});