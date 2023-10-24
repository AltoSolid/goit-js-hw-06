const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
    input.value.length === 6 ? addValidClass(): addInvalidClass();
});

function addValidClass() {
    input.classList.remove('invalid');
    input.classList.add('valid');
}

function addInvalidClass() {
    input.classList.remove('valid');
    input.classList.add('invalid');
}