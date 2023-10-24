const input = document.querySelector('#controls > input[type="number"]')
const createButton = document.querySelector('#controls button[data-create]');
const destroyButton = document.querySelector('#controls button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let index = 0; index < amount;  ++index) {
    let newBox = document.createElement('div');
    newBox.style.width = getBoxSizes(index); 
    newBox.style.height = getBoxSizes(index);
    newBox.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(newBox);
  }
}

function getBoxSizes(index) {
  return 30 + (index * 10) + 'px';
}

createButton.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyButton.addEventListener('click', () => {
  while(boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
});
