// My JS
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const input = document.getElementById('input');

  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
  const addButton = document.getElementById('add');
  const container = document.querySelector('.Container');

  const taskList = document.createElement('div');
  taskList.className = 'TaskList';
  container.appendChild(taskList);

  const addTask = () => {
    const taskText = input.value.trim();
    if (taskText === '') return;

    const task = document.createElement('div');
    task.className = 'Task';
    task.innerHTML = `
      <span class="TaskText">${taskText}</span>
      <div class="TaskButtons">
        <button class="Delete">Delete</button>
        <button class="Complete">Complete</button>
      </div>
    `;

    taskList.appendChild(task);
    input.value = '';

    task.querySelector('.Delete').addEventListener('click', () => {
      task.remove();
    });

    task.querySelector('.Complete').addEventListener('click', () => {
      task.classList.toggle('completed');
    });
  };

  addButton.addEventListener('click', addTask);

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
