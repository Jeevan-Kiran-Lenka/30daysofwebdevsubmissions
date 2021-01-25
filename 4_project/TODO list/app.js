// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions

function addTodo(event) {
    event.preventDefault();   // prevent form from submitting
    // todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create list(LI)
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);
    // completed/checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // can give first then delete it
        todo.classList.add("fall");  // to add a fall effect
        // todo.remove();
        todo.addEventListener('tranitioned', function(){
            todo.remove();
        })
    }

    // check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function check(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "Completed":
                if (todo.classList.contains('Completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "Uncompleted":
                if (!todo.classList.contains('Completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            default:
                break;
            }
        })
}