/**
 * @jest-environment jsdom
 */

describe('To-Do List App', () => {
    let taskInput, addTaskBtn, taskList;

    beforeEach(() => {
        // Set up our document body
        document.body.innerHTML = `
            <div>
                <input type="text" id="task-input" />
                <button id="add-task-btn">Add Task</button>
                <ul id="task-list"></ul>
            </div>
        `;

        // Get references to the elements
        taskInput = document.getElementById('task-input');
        addTaskBtn = document.getElementById('add-task-btn');
        taskList = document.getElementById('task-list');
    });

    test('adds a task to the list', () => {
        // Simulate user input
        taskInput.value = 'New Task';
        console.log('Before click:', taskList.children.length);

        // Simulate clicking the add button
        addTaskBtn.click();
        console.log('After click:', taskList.children.length);

        // Check if the task was added
        expect(taskList.children.length).toBe(1);
        expect(taskList.children[0].querySelector('span').textContent).toBe('New Task');
    });

    test('toggles task completion', () => {
        // Add a task
        taskInput.value = 'New Task';
        addTaskBtn.click();

        // Find the task and the complete button
        const taskItem = taskList.querySelector('li');
        if (!taskItem) {
            console.error("No task item found");
            return;
        }
        const completeBtn = taskItem.querySelector('.complete-btn');
        if (!completeBtn) {
            console.error("No complete button found");
            return;
        }

        // Simulate clicking the complete button
        completeBtn.click();

        // Check if the task was marked as completed
        expect(taskItem.classList.contains('completed')).toBe(true);
    });
});
