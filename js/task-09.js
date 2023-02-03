function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let bkgColor = document.querySelector('.color');

const btn = document.querySelector('.change-color');

btn.addEventListener('click', changeBtn);

function changeBtn() {
  const randomColor = bkgColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  
};
