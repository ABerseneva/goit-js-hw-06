const input = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

text.style.fontSize = "16";

input.addEventListener("input", (event) => {
  text.style.fontSize = `${input.value}px`;
});


