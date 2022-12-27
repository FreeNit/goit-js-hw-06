const inputEl = document.querySelector('#name-input');
let spanOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  if (inputEl.value.length === 0) {
    spanOutputEl.textContent = 'Anonymous';
  } else {
    spanOutputEl.textContent = inputEl.value;
  }
});
