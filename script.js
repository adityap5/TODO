// Select the necessary HTML elements
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Create an array to store the to-do items
let todos = [];

// Function to add a new to-do item
function addTodo() {
  // Get the value from the input field
  const todoText = inputField.value;

  if (todoText !== '') {
    // Create a new to-do object
    const todo = {
      text: todoText,
      completed: false
    };

    // Add the new to-do object to the array
    todos.push(todo);

    // Clear the input field
    inputField.value = '';

    // Render the updated to-do list
    renderTodoList();
  }
}

// Function to remove a to-do item
function removeTodo(index) {
  // Remove the to-do item from the array
  todos.splice(index, 1);

  // Render the updated to-do list
  renderTodoList();
}

// Function to toggle the completion status of a to-do item
function toggleCompletion(index) {
  // Toggle the completed property of the to-do item
  todos[index].completed = !todos[index].completed;

  // Render the updated to-do list
  renderTodoList();
}

// Function to render the to-do list
function renderTodoList() {
  // Clear the existing list
  todoList.innerHTML = '';

  // Loop through the array and create list items
  todos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = todo.text;

    // Add a class based on the completion status
    if (todo.completed) {
      listItem.classList.add('completed');
    }

    // Create buttons for removing and marking completion
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeTodo(index));

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => toggleCompletion(index));

    // Append the buttons to the list item
    listItem.appendChild(removeButton);
    listItem.appendChild(completeButton);

    // Append the list item to the to-do list
    todoList.appendChild(listItem);
  });
}

// Add event listener to the add button
addButton.addEventListener('click', addTodo);
