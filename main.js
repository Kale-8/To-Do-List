const alertify = window.alertify;
const taskList = [];
const ul = document.querySelector('#list');

(() => {
    const saveTasks = () => localStorage.setItem('tasks', JSON.stringify(taskList));

    const loadTasks = () => {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            const tasks = JSON.parse(saved);
            tasks.forEach(task => {
                taskList.push(task);
                renderTask(task);
            });
        }
        updateCounts();
    };

    const renderTask = (task) => {
        const li = document.createElement('li');
        li.id = task.id;
        li.classList.toggle('completed', task.isCompleted);
        li.innerHTML = `
      <strong>${task.taskName}</strong>
      <div>
        <input type="checkbox" class="checkbox" ${task.isCompleted ? 'checked' : ''}>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>   
      </div>`;
        ul.appendChild(li);
    };

    const updateCounts = () => {
        document.getElementById('count-all').textContent = `${taskList.length}`;
        document.getElementById('count-completed').textContent = `${taskList.filter(task => task.isCompleted).length}`;
        document.getElementById('count-pending').textContent = `${taskList.filter(task => !task.isCompleted).length}`;
    };

    const createTask = (event) => {
        event.preventDefault();
        const input = document.querySelector('#input');
        if (!input.value.trim()) {
            alertify.error('Please enter a valid task');
            input.value = '';
            return;
        }
        const task = {
            id: Date.now(),
            taskName: input.value.trim(),
            isCompleted: false
        };
        taskList.push(task);
        input.value = '';
        renderTask(task);
        saveTasks();
        updateCounts();
        alertify.success('Task added successfully');
    };

    const completeTask = (li, checkbox) => {
        const task = taskList.find(task => task.id === +li.id);
        if (!task) return;
        task.isCompleted = checkbox.checked;
        li.classList.toggle('completed', task.isCompleted);
        saveTasks();
        updateCounts();
        task.isCompleted
            ? alertify.success('Task completed')
            : alertify.error('Task uncompleted');
    };

    const deleteTask = (li) => {
        const index = taskList.findIndex(task => task.id === +li.id);
        if (index > -1) {
            taskList.splice(index, 1);
            li.remove();
            saveTasks();
            updateCounts();
            alertify.error('Task deleted');
        }
    };

    const filterTasks = (filter) => {
        document.querySelectorAll('#list li').forEach(li => {
            const task = taskList.find(task => task.id === +li.id);
            if (filter === 'all') li.style.display = 'flex';
            if (filter === 'completed') li.style.display = task.isCompleted ? 'flex' : 'none';
            if (filter === 'pending') li.style.display = !task.isCompleted ? 'flex' : 'none';
        });
    };

    const handleTask = (event) => {
        const element = event.target;
        const li = element.closest('li');
        if (!li) return;
        if (element.classList.contains('checkbox')) completeTask(li, element);
        if (element.classList.contains('delete') || element.classList.contains('fa-trash')) deleteTask(li);
    };

    const handleFilters = (event) => {
        const button = event.target.closest('button[data-filter]');
        if (!button) return;
        document.querySelectorAll('#filters button').forEach(button => button.classList.remove('active'));
        button.classList.add('active');
        filterTasks(button.dataset.filter);
    };

    document.querySelector('#form').addEventListener('submit', createTask);
    ul.addEventListener('click', handleTask);
    document.querySelector('#filters').addEventListener('click', handleFilters);

    loadTasks();
})();