const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ***************************
// ! ***(MODERN VARIANT)******
// ***************************

// HTML container
const ingredientsContainer = document.querySelector('#ingredients');

// Function to create <li> element
function createLiElement(ingridientTitle) {
  const liEl = document.createElement('li');

  liEl.classList.add('item');
  liEl.textContent = ingridientTitle;

  return liEl;
}

// Use map() to create new array with li elements
const ingredientsToAppend = ingredients.map((ingridientTitle) => {
  return createLiElement(ingridientTitle);
});

// SPREAD and append array with li elements to the html container
ingredientsContainer.append(...ingredientsToAppend);

// *******************************************
// ! ***(OLD VARIANT: just for practice)******
// *******************************************

// // 1) Get container element from html file
// const ingridientsContainer = document.querySelector('#ingredients');
// const ingridientsWithMarkup = [];

// // 2) Function for creation <li> element
// function createLiElement(ingridientText) {
//   const liEl = document.createElement('li');

//   liEl.classList.add('item');
//   liEl.textContent = ingridientText;

//   return liEl;
// }

// // 3) Call function on each array element and push new tag to the array
// for (const ingredient of ingredients) {
//   let liElement = createLiElement(ingredient);
//   console.log(liElement);
//   ingridientsWithMarkup.push(liElement);
// }

// // 4) Append <li> collection to the html container
// ingridientsContainer.append(...ingridientsWithMarkup);
