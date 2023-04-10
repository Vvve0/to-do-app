const addTaskButton = document.querySelector('button');
const taskInput = document.querySelector('input');
const taskList = document.querySelector('ul');

addTaskButton.addEventListener('click', () => {
    const taskTitle = taskInput.value;
    if (taskTitle) {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskTitle;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
    // zapisz listę zadań do localStorage
    const tasks = Array.from(taskList.children).map((task) => task.innerText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
});
function init() {
    // odczytaj zadania z localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // utwórz elementy listy na podstawie zapisanych zadań
    tasks.forEach((taskTitle) => {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskTitle;
        taskList.appendChild(taskItem);
    });
}

// wywołaj funkcję inicjującą
init();