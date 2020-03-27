const myButton = document.getElementById('button');
const nameAreaText = document.getElementById('name-area');
const inputCurrent = document.getElementById('nameEntry');

myButton.addEventListener('click', function() {
    const currentState = inputCurrent.value;
    nameAreaText.textContent = currentState;
});