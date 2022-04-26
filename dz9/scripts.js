const TASK_DONE_CLASS = 'done';
const HIDDEN_CLASS = 'hidden';
const ERROR_INPUT_CLASS = 'errorInput';

const addBtn = document.getElementById('addBtn');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const errorContainer = document.getElementById('errorContainer');

addBtn.addEventListener('click', onAddBtnClick);
taskNameInput.addEventListener('input', onTaskNameInput);

addTask('Hello world!');

function onAddBtnClick() {
    submitForm();
}

function onTaskNameInput() {
    validateForm();
}

function onTaskItemClick() {
    console.log('clicked');
}

function submitForm() {
    const title = getTaskName();

    addTask(title);
    clearTaskNameInput();
}

function validateForm() {
    const title = getTaskName();
    const error = validateTaskName(title);

    if (error) {
        showError(error);
    } else {
        hideError();
    }
}

function validateTaskName(value) {
    if (value === '') return ERROR_MESSAGES.REQUIRED;

    if (value.length < 3) return ERROR_MESSAGES.SHORT;

    return null;
}

function getTaskName() {
    return taskNameInput.value;
}

function clearTaskNameInput() {
    taskNameInput.value = '';
}

function addTask(title) {
    const el = createTaskElement(title);

    taskList.append(el);
}

function createTaskElement(title) {
    const el = document.createElement('div');
    el.className = 'task-item u-full-width';
    el.textContent = title;

    el.addEventListener('click', () => toggleTaskState(el));

    return el;
}

function showError(msg) {
    errorContainer.textContent = msg;
    errorContainer.classList.remove(HIDDEN_CLASS);
    taskNameInput.classList.add(ERROR_INPUT_CLASS);
    addBtn.disabled = true;
}

function hideError() {
    errorContainer.textContent = '';
    errorContainer.classList.add(HIDDEN_CLASS);
    taskNameInput.classList.remove(ERROR_INPUT_CLASS);
    addBtn.disabled = false;
}

function toggleTaskState(el) {
    el.classList.toggle(TASK_DONE_CLASS);
}
