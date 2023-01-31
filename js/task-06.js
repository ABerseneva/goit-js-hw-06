const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const currentLength = input.dataset.length;
    const inputDataLength = input.value.length;
    if (currentLength == inputDataLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add('invalid');
        input.classList.remove("valid");
}
};

// input.addEventListener("blur", () => {
//     if (input.value.length === Number(input.dataset.length)) {
//         input.classList.add("valid");
//         input.classList.remove("invalid");
//         return;
//     };
//     input.classList.add("invalid");
//     input.classList.remove("valid");
// });