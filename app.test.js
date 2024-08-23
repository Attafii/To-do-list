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
                <ul id="task-list">
                    <li>
                        <span>Initial Task</span>
                        <button class="delete-btn"></button>
                        <button class="complete-btn"></button>
                    </li>
                </ul>
            </div>
        `;

        // Get references to the elements
        taskInput = document.getElementById('task-input');
        addTaskBtn = document.getElementById('add-task-btn');
        taskList = document.getElementById('task-list');
    });

    test('clicks on the complete button to mark a task as completed', () => {
        // Find the task and the complete button
        const taskItem = taskList.querySelector('li');
        expect(taskItem).not.toBeNull(); // Ensure the task item exists
        
        const completeBtn = taskItem.querySelector('.complete-btn');
        expect(completeBtn).not.toBeNull(); // Ensure the complete button exists

        // Simulate clicking the complete button
        completeBtn.click();

        // Check if the task was marked as completed
        expect(taskItem.classList.contains('completed')).toBe(true);
    });
});
