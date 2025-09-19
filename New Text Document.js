// JavaScript Example: Manage a list of tasks

// Create an array of tasks
let tasks = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Practice coding", completed: true },
  { id: 3, title: "Build a project", completed: false },
];

/**
 * Displays all tasks from the global `tasks` array to the console.
 */
function showTasks() {
  console.log("Your Tasks:");
  tasks.forEach((task) => {
    console.log(`${task.id}. ${task.title} - Completed: ${task.completed}`);
  });
}

/**
 * Marks a specific task as completed by its ID.
 * @param {number} id The ID of the task to mark as complete.
 */
function completeTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    console.log(`Task "${task.title}" is now completed!`);
  } else {
    console.log("Task not found.");
  }
}

// Display tasks
showTasks();

// Complete task with ID 3
completeTask(3);

// Display tasks again
showTasks();
