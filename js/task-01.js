// 1) Quantity of categories
const numberOfCategories =
  document.querySelector('#categories').children.length;
console.log(`Number of categories: ${numberOfCategories}`);

// 2) Header text + categories quantity
const items = document.querySelectorAll('.item');
for (const item of items) {
  let categoryName = item.firstElementChild.textContent;
  let categoriesQty = item.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoriesQty}`);
}
