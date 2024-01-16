function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            ${taskInput.value}
            <button onclick="toggleCompletion(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function toggleCompletion(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed');
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
