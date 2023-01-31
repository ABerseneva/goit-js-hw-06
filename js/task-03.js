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

// const li = images.map(
//   ({ url, alt }) => 
//   `<li><img class = "image03" src = "${url}" alt = "${alt}"></li>`
// );
// console.log(li);
// const gallery = document.querySelector('.gallery');
// console.log(gallery);

// gallery.insertAdjacentHTML("afterbegin", li)

const galleryKey = document.querySelector('.gallery');

const inputArray = [];

images.forEach((item) => {
  const li = `<li><img class = "image03" src = "${item.url}" alt = "${item.alt}"></li>`;
  inputArray.push(li);
});

galleryKey.insertAdjacentHTML('beforeEnd', inputArray.join(''));

galleryKey.style.display = 'flex';