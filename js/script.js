// task - 1
// const list = document.querySelectorAll('.item');
// console.dir(`Number of categories: ${list.length}`);
// const category = document.querySelectorAll('h2');
// category.forEach(item => console.dir(`Category: ${item.textContent}\nElements: ${item.nextElementSibling.children.length}`));

//  task - 2
//  const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
//  ];
//  const container = document.querySelector('#ingredients');
//  const markup = ingredients.map((item) => {
//    const li = document.createElement('li');
//    li.textContent = item;
//    li.classList.add('item');
//    return li;
//  });
// container.append(...markup);

// task - 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=360",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=360",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=360",
    alt: "Group of Horses Running",
  },
];
const container = document.querySelector('.gallery');
const markup = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`).join('');
container.insertAdjacentHTML('beforeend', markup);