// get the elements
const rangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

rangeEl.addEventListener('input', () => {
  spanEl.style.fontSize = rangeEl.value + 'px';
});
