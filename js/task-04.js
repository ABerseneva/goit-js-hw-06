let counterValue = 0;

const minusButton = document.querySelector('button[data-action="decrement"]');

const plusButton = document.querySelector('button[data-action="increment"]');

const spanKey = document.getElementById('value');

plusButton.addEventListener('click', plusButtonCalc);

function plusButtonCalc() {
    counterValue += 1;
    spanKey.textContent = counterValue.toString();
};

minusButton.addEventListener('click', minusButtonCalc);

function minusButtonCalc() {
    counterValue -= 1;
    spanKey.textContent = counterValue.toString();
};



