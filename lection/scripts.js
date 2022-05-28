$(() => {
    const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';
    const TASK_ITEM_CLASS = 'task-item';
    const DELETE_BTN_CLASS = 'delete-btn';
    const TASK_DONE_CLASS = 'done';
    const HIDDEN_CLASS = 'hidden';
    const ERROR_INPUT_CLASS = 'errorInput';
    const STORAGE_KEY = 'list';

    const TASK_ITEM_TEMPLATE = $('#taskItemTemplate').html();

    const $taskNameInput = $('#taskNameInput');
    const $taskList = $('#taskList');
    const $errorContainer = $('#errorContainer');

    let todoList = [];
    let error = null;

    $('#addTaskForm').on('submit', onAddTaskFormSubmit);

    $taskNameInput.on('input', onTaskNameInput);
    // $taskList.on('click', onTaskItemClick);
    $taskList.on('click', '.' + TASK_ITEM_CLASS, onTaskItemToggle);
    $taskList.on('click', '.' + DELETE_BTN_CLASS, onTaskItemDelete);

    init();

    function onAddTaskFormSubmit(e) {
        e.preventDefault();
        submitForm();
    }

    function onTaskNameInput() {
        validateForm();
    }

    function onTaskItemToggle(e) {
        const id = getTaskElementId(e.target);
        console.log(id);
        toggleTaskState(id);
    }

    function onTaskItemDelete(e) {
        const id = getTaskElementId(e.target);
        deleteTask(id);
    }

    // function onTaskItemClick(e) {
    //     const id = getTaskElementId(e.target);

    //     if (e.target.classList.contains(TASK_ITEM_CLASS)) {
    //         toggleTaskState(id);
    //     }
    //     if (e.target.classList.contains(DELETE_BTN_CLASS)) {
    //         deleteTask(id);
    //     }
    // }

    function init() {
        fetchList();
    }

    function fetchList() {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                todoList = data;
                renderList();
            });
    }

    function renderList() {
        const html = todoList.map(createTaskHTML).join('\n');
        $taskList.html(html);
    }

    function submitForm() {
        const newTask = getNewTask();

        addTask(newTask);
        clearTaskNameInput();
    }

    function validateForm() {
        const title = getTaskName();
        error = validateTaskName(title);

        updateErrorState();
    }

    function validateTaskName(value) {
        if (value === '') return ERROR_MESSAGES.REQUIRED;

        if (value.length < 3) return ERROR_MESSAGES.SHORT;

        return null;
    }

    function getNewTask() {
        return {
            title: getTaskName(),
            isDone: false,
        };
    }

    function getTaskName() {
        return $taskNameInput.val();
    }

    function clearTaskNameInput() {
        $taskNameInput.val('');
    }

    function addTask(newTask) {
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((data) => {
            fetchList();
        });
    }

    function createTaskHTML(task) {
        return TASK_ITEM_TEMPLATE.replace('{{id}}', task.id)
            .replace('{{title}}', task.title)
            .replace('{{doneClass}}', task.isDone ? TASK_DONE_CLASS : '');
    }

    function getTaskElementId(el) {
        const $el = $(el);

        const $taskElement = $el.closest('.' + TASK_ITEM_CLASS);
        return String($taskElement.data('id'));
    }

    function updateErrorState() {
        if (error) {
            showError(error);
        } else {
            hideError();
        }
    }

    function showError(msg) {
        $errorContainer.text(msg).removeClass(HIDDEN_CLASS);
        $taskNameInput.addClass(ERROR_INPUT_CLASS);

        error = true;
    }

    function hideError() {
        $errorContainer.text('').addClass(HIDDEN_CLASS);
        $taskNameInput.removeClass(ERROR_INPUT_CLASS);

        error = true;
    }

    function toggleTaskState(taskId) {
        // const task = todoList.find((task) => task.id === taskId);
        const task = todoList.find(({ id }) => id === taskId);

        if (!task) {
            return console.error(ERROR_MESSAGES.ID_NOT_FOUND);
        }

        task.isDone = !task.isDone;

        updateTodo(task);
    }

    function updateTodo(task) {
        fetch(API_URL + task.id, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((data) => {
            fetchList();
        });
    }

    function deleteTask(taskId) {
        fetch(API_URL + taskId, {
            method: 'DELETE',
        }).then((data) => {
            fetchList();
        });
    }
});
