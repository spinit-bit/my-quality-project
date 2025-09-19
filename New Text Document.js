// JavaScript Example: Manage a list of tasks

// Create an array of tasks
let tasks = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Practice coding", completed: true },
  { id: 3, title: "Build a project", completed: false }
];

// Function to display all tasks
/**
 *
 */
function showTasks() {
  console.log("Your Tasks:");
  tasks.forEach(task => {
    console.log(`${task.id}. ${task.title} - Completed: ${task.completed}`);
  });
}

// Function to mark a task as completed
/**
 *
 * @param id
 */
function completeTask(id) {
  let task = tasks.find(t => t.id === id);
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
