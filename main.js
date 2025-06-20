const taskList = [];
const list = document.querySelector('#list');
let id = 0;
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const task = {
        id: id++,
        taskName: document.querySelector('#input').value,
        isCompleted: false,
    }
    taskList.push(task);
    document.querySelector('#input').value = '';
    const li = document.createElement('li');
    li.innerHTML = `
                    <mark>${task.taskName}</mark>
                    <div>
                        <button>Complete</button>
                        <button>Delete</button>   
                    </div>
                    `;
    list.appendChild(li);
});