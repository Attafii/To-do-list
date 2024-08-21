// app.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            // Create a new list item
            const li = document.createElement('li');
            li.className = 'task';

            // Create a span to hold the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            li.appendChild(taskSpan);

            // Append the new task to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';

            // Add event listener to mark task as complete
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });
        }
    }

    // Add event listener to the button
    addTaskBtn.addEventListener('click', addTask);

    // Allow pressing "Enter" to add the task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
