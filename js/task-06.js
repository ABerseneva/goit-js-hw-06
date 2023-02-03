const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const inputDataLength = input.dataset.length;
    const currentLength = input.value.length;
    if (inputDataLength == currentLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add('invalid');
        input.classList.remove("valid");
}
};
