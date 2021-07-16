const getInput = document.querySelector('#validation-input');
const getDataLength = Number(getInput.getAttribute('data-length'));
const inputIsValid = getInput.addEventListener('blur', onFormInputFocus);

function onFormInputFocus(event) {
    const getInputValue = event.currentTarget.value;
    if (getInputValue.length < getDataLength) {
        getInput.classList.add('invalid');
        getInput.classList.remove('valid');
    }
    else {
        getInput.classList.add('valid');
        getInput.classList.remove('invalid');
    }
};
