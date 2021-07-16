const counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const decrement = () => counterValue.textContent-=buttonIncrement.textContent;
const increment = () => counterValue.textContent-=buttonDecrement.textContent;
buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);
