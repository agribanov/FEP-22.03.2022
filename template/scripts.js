const messageEl = document.getElementById('message');
const usernameInputEl = document.getElementById('username');
const buttonEl = document.getElementById('clickBtn');

buttonEl.addEventListener('click', onBtnClick);
usernameInputEl.addEventListener('input', onUsernameInput);

function onBtnClick() {
    sayHiToUser();
    clearName();
}

function onUsernameInput() {
    sayHiToUser();
}

function sayHiToUser() {
    const name = getName();

    showMessage(name);
}

function getName() {
    return usernameInputEl.value;
}

function showMessage(name) {
    messageEl.textContent = `Hello, ${name}!`;
}

function clearName() {
    usernameInputEl.value = '';
}
