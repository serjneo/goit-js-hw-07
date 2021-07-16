const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onInputFontSizeChange = () => {
    textRef.style.fontSize = inputRangeRef.value + 'px';

};

inputRangeRef.addEventListener('input', onInputFontSizeChange);