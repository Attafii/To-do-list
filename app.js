// app.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const dateElement = document.getElementById('date');
    const calendarContainer = document.querySelector('.calendar-container');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        const taskDateValue = taskDate.value;
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task';
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            const taskDateSpan = document.createElement('span');
            taskDateSpan.textContent = taskDateValue ? ` (${new Date(taskDateValue).toLocaleDateString()})` : '';
            taskDateSpan.className = 'task-date';
            li.appendChild(taskSpan);
            li.appendChild(taskDateSpan);
            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.className = 'complete-btn';
            completeBtn.addEventListener('click', function() {
                li.classList.toggle('completed');
            });
            li.appendChild(completeBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
            taskDate.value = '';
=======
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });
        }
    }

    // Add event listener to the button
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Display the current date
    function displayDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString(undefined, options);
    }

    // Generate calendar for the current month
    function generateCalendar() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Clear previous calendar
        calendarContainer.innerHTML = '';

        // Calendar headers (days of the week)
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-day calendar-header';
            header.textContent = day;
            calendarContainer.appendChild(header);
        });

        // Blank spaces before the first day
        for (let i = 0; i < firstDay; i++) {
            const blank = document.createElement('div');
            blank.className = 'calendar-day';
            calendarContainer.appendChild(blank);
        }

        // Days of the month
        for (let day = 1; day <= lastDate; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            calendarContainer.appendChild(dayElement);
        }
    }

    // Initial function calls
    displayDate();
    generateCalendar();
});
