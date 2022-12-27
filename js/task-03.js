const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Get container-element
const gallery = document.querySelector('.gallery');

// Function for creation one single li -> img
const makeLiWithInsertedInImg = (image) => {
  const { url, alt } = image;
  return `
    <li class="gallery__item">
      <img class="gallery__img" src="${url}" alt="${alt}"/>
    </li> 
  `;
};

// Create, insert and convert to string all the elements
const liElementsWithInsertedInImages = images
  .map(makeLiWithInsertedInImg)
  .join('');

// Append result to the container element
gallery.insertAdjacentHTML('afterbegin', liElementsWithInsertedInImages);
