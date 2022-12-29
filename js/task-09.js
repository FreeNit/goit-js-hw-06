function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// * Get main elements
const changeColorBtnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
