// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

let counterValue = 0;

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

const minusButton = document.querySelector('button[data-action="decrement"]');

const plusButton = document.querySelector('button[data-action="increment"]');

const spanKey = document.getElementById('value');

plusButton.addEventListener('click', plusButtonCalc);

function plusButtonCalc() {
    counterValue += 1;
    spanKey.textContent = counterValue.toString();
    return counterValue;
};

minusButton.addEventListener('click', minusButtonCalc);

function minusButtonCalc() {
    counterValue -= 1;
    spanKey.textContent = counterValue.toString();
    return counterValue;
};

// Оновлюй інтерфейс новим значенням змінної counterValue.

