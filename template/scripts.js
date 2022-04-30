const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';
const HIDDEN_CLASS = 'hidden';
const ERROR_INPUT_CLASS = 'errorInput';

const TASK_ITEM_TEMPLATE =
    document.getElementById('taskItemTemplate').innerHTML;

const addBtn = document.getElementById('addBtn');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const errorContainer = document.getElementById('errorContainer');

let error = false;
document
    .getElementById('addTaskForm')
    .addEventListener('submit', onAddTaskFormSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskList.addEventListener('click', onTaskItemClick);

addTask('Hello world!');

function onAddTaskFormSubmit(e) {
    e.preventDefault();
    submitForm();
}

function onTaskNameInput() {
    validateForm();
}

function onTaskItemClick(e) {
    if (e.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleTaskState(e.target);
    }
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTask(e.target.closest('.' + TASK_ITEM_CLASS));
    }
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
    const taskItemHtml = createTaskHTML(title);

    taskList.insertAdjacentHTML('beforeend', taskItemHtml);
}

function createTaskHTML(title) {
    return TASK_ITEM_TEMPLATE.replace('{{title}}', title);
}

function showError(msg) {
    errorContainer.textContent = msg;
    errorContainer.classList.remove(HIDDEN_CLASS);
    taskNameInput.classList.add(ERROR_INPUT_CLASS);
    addBtn.disabled = true;
    error = true;
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

function deleteTask(el) {
    el.remove();
}
