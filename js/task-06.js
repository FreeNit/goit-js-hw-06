// Get input field
const inputEl = document.querySelector('#validation-input');
const SYMBOL_LENGTH = inputEl.dataset.length;

// Function to remove class (practice to create function)
function removeClass(element, className) {
  element.classList.remove(className);
}

// Function to add class (practice to create function)
function addClass(element, className) {
  element.classList.add(className);
}

inputEl.addEventListener('blur', () => {
  // Check the length of input
  if (inputEl.value.length >= SYMBOL_LENGTH) {
    // Check if 'invalid' class present and remove it if YES
    if (inputEl.classList.contains('invalid')) {
      removeClass(inputEl, 'invalid');
    }
    addClass(inputEl, 'valid');
  } else {
    // Check if 'valid' class present and remove it if YES
    if (inputEl.classList.contains('valid')) {
      removeClass(inputEl, 'valid');
    }
    addClass(inputEl, 'invalid');
  }
});
