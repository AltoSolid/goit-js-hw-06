const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', function(){
    span.textContent = input.value.trim() || 'Anonymous'
});