// * basic elements *
const controlsEl = document.querySelector('#controls').children;
const [inputNumber, createBtn, destroyBtn] = controlsEl;
const containerEl = document.querySelector('#boxes');

// * basic div size *
let basicWidth = 30;
let basicHeight = 30;

// * array for saving virtual div elements before appending them into the DOM *
const divElements = [];

// * function to create random hex color *
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// * function to create defined html element
function createDefineElement(tagName) {
  let newElement = document.createElement(tagName);
  newElement.style.width = basicHeight + 'px';
  newElement.style.height = basicWidth + 'px';
  newElement.style.backgroundColor = getRandomHexColor();

  return newElement;
}

// * function to create elements *
function createBoxes(amount) {
  if (amount > 0) {
    for (let i = 0; i < amount; i++) {
      // const divEl = document.createElement('div');
      // divEl.style.width = basicHeight + 'px';
      // divEl.style.height = basicWidth + 'px';
      // divEl.style.backgroundColor = getRandomHexColor();
      // divElements.push(divEl);

      divElements.push(createDefineElement('div'));

      basicWidth += 10;
      basicHeight += 10;
    }
  }
  // * Destruct and append all elements into container
  containerEl.append(...divElements);
}

createBtn.addEventListener('click', () => {
  createBoxes(inputNumber.value);
});

// * function to destroy elements *
function destroyBoxes(elementToClear) {
  elementToClear.innerHTML = '';
  divElements.length = 0;
  basicWidth = 30;
  basicHeight = 30;
}

// * clear array with elements when click the button
destroyBtn.addEventListener('click', () => {
  // * check if container has elements
  if (containerEl.children.length > 0) {
    destroyBoxes(containerEl);
  }
});
