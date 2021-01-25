"use strict";

// Selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var filterOption = document.querySelector(".filter-todo"); // Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo); // Functions

function addTodo(event) {
  event.preventDefault(); // prevent form from submitting
  // todo DIV

  var todoDiv = document.createElement('div');
  todoDiv.classList.add('todo'); // create list(LI)

  var newtodo = document.createElement('li');
  newtodo.innerText = todoInput.value;
  newtodo.classList.add('todo-item');
  todoDiv.appendChild(newtodo); // completed/checked button

  var completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton); // trash button

  var trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton); // append to list

  todoList.appendChild(todoDiv); // clear todo input value

  todoInput.value = "";
}

function deleteCheck(e) {
  var item = e.target; // delete todo

  if (item.classList[0] === 'trash-btn') {
    var todo = item.parentElement; // can give first then delete it

    todo.classList.add("fall"); // to add a fall effect
    // todo.remove();

    todo.addEventListener('tranitioned', function () {
      todo.remove();
    });
  } // check mark


  if (item.classList[0] === 'complete-btn') {
    var _todo = item.parentElement;

    _todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  var todos = todoList.childNodes;
  todos.forEach(function check(todo) {
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
  });
}