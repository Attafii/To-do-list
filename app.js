document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const dateElement = document.getElementById('date');
    const calendarContainer = document.querySelector('.calendar-container');
    const categorySelect = document.getElementById('category-select');
    const prioritySelect = document.getElementById('priority-select');
    const filterCategorySelect = document.getElementById('filter-category-select');
    const filterPrioritySelect = document.getElementById('filter-priority-select');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        const category = categorySelect.value;
        const priority = prioritySelect.value;

        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = `task ${category.toLowerCase()} priority-${priority.toLowerCase()}`;
            li.setAttribute('data-category', category);
            li.setAttribute('data-priority', priority);

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            li.appendChild(taskSpan);

            const categoryBadge = document.createElement('span');
            categoryBadge.className = 'category-badge';
            categoryBadge.textContent = category;
            li.appendChild(categoryBadge);

            const priorityBadge = document.createElement('span');
            priorityBadge.className = 'priority-badge';
            priorityBadge.textContent = priority;
            li.appendChild(priorityBadge);

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
        }
    }

    // Function to filter tasks by category and priority
    function filterTasks() {
        const filterCategory = filterCategorySelect.value;
        const filterPriority = filterPrioritySelect.value;
        const tasks = taskList.getElementsByTagName('li');

        for (let task of tasks) {
            const taskCategory = task.getAttribute('data-category');
            const taskPriority = task.getAttribute('data-priority');

            const categoryMatch = (filterCategory === 'All' || filterCategory === taskCategory);
            const priorityMatch = (filterPriority === 'All' || filterPriority === taskPriority);

            if (categoryMatch && priorityMatch) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        }
    }

    // Add event listener to the add task button
    addTaskBtn.addEventListener('click', addTask);

    // Add event listeners to the filter select dropdowns
    filterCategorySelect.addEventListener('change', filterTasks);
    filterPrioritySelect.addEventListener('change', filterTasks);

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

        calendarContainer.innerHTML = '';

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-day calendar-header';
            header.textContent = day;
            calendarContainer.appendChild(header);
        });

        for (let i = 0; i < firstDay; i++) {
            const blank = document.createElement('div');
            blank.className = 'calendar-day';
            calendarContainer.appendChild(blank);
        }

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
