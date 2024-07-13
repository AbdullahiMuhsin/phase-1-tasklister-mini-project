document.addEventListener('DOMContentLoaded',() => {
const form = document.getElementById('create-task-form');
const tasksList = document.getElementById('tasks');

// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); 

 
  const taskDescription = document.getElementById('new-task-description').value;

  
  const newTaskItem = document.createElement('li');
  newTaskItem.textContent = taskDescription; 

  
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button'); 

  
  deleteButton.addEventListener('click', function () {
      tasksList.removeChild(newTaskItem); 
  });
  newTaskItem.appendChild(deleteButton); 

  tasksList.appendChild(newTaskItem);
document.getElementById('new-task-description').value = '';
  
});
});