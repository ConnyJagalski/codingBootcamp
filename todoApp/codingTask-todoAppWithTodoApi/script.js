"use strict";

const all = document.getElementById("all");
const open = document.getElementById("open");
const done = document.getElementById("done");
const remove = document.getElementById("remove");
const newTodo = document.getElementById("newTodo");
const add = document.getElementById("add");
const list = document.querySelector("ul");

add.addEventListener("click", validateInput);
document.addEventListener("keydown", checkForKey);
list.addEventListener("change", changeCheckboxState);
all.addEventListener("input", showAllTodos);
open.addEventListener("input", showOpenTodos);
done.addEventListener("input", showDoneTodos);
remove.addEventListener("click", removeDone);

let todoList = [];

function createTodoListItem(todo) {
  const newItem = document.createElement("li");

  const todoText = document.createElement("label");
  todoText.innerText = todo.description;
  todoText.setAttribute("for", `${todo.id}`)

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.done;
  checkbox.setAttribute("id", todo.id);

  newItem.append(checkbox, todoText);
  return newItem;
}

function loadList(shownList) {
  list.innerHTML = "";

  shownList.forEach((todo) => {
    const newItem = createTodoListItem(todo);

    list.appendChild(newItem);
  });
}

function loadTodos () {
  fetch("http://localhost:4730/todos")
    .then((response) =>
      response.json())
    .then((backendTodos) => {
      todoList = backendTodos;
      loadList(todoList);
    })
}

loadTodos();

function createUniqueId() {
  let randomNumber;
  
  do {
    randomNumber = Math.floor(Math.random() * 100000);
  } while (todoList.some(todo => todo.id === randomNumber));
  
  return randomNumber;
}

function addNewTodoItem(newElement) {
  fetch("http://localhost:4730/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newElement),
  })
    .then((res) => res.json())
    .then(() => {
      newTodo.value = "";
      loadTodos();
    });
}

function validateInput() {
  newTodo.value = newTodo.value.trim();

  if (newTodo.value.length < 3) {
    newTodo.value = "Todo too short!";
  } else {
    const newElement = { description: newTodo.value, done: false, id: createUniqueId() };

    const todoExists = todoList.some(todo => todo.description === newTodo.value);

    if (todoExists) {
      newTodo.value = "Todo already exists!";
      return
    } else if (newTodo.value === "Todo already exists!" || newTodo.value === "Todo too short!") {
      newTodo.value = "";
    } else {
      addNewTodoItem(newElement);
    }
  }
}

function checkForKey(event) {
  if (event.key === "Enter") {
    validateInput();
  }
}

function changeCheckboxState(event) {
  const target = event.target;

  if (target.tagName === "INPUT" && target.type === "checkbox") {
    const changedId = parseInt(target.id);
    const changedTodo = todoList.find(todo => todo.id === changedId);

    if (changedTodo) {
      changedTodo.done = target.checked;
    }
  }
}

let filteredTodosList = [];

function showAllTodos() {
  loadList(todoList);
}

function showDoneTodos() {
  filteredTodosList = [];

  for (let index = 0; index < todoList.length; index++) {
    const todo = todoList[index];
    
    if (todo.done === true) {
      filteredTodosList.push(todo);
    }
  }
  
  loadList(filteredTodosList);
}

function showOpenTodos() {
  filteredTodosList = [];

  for (let index = 0; index < todoList.length; index++) {
    const todo = todoList[index];
    
    if (todo.done === false) {
      filteredTodosList.push(todo);
    }
  }
  
  loadList(filteredTodosList);
}

async function removeDone() {
  showDoneTodos();
  const fetchDeleteCalls = [];

  for (const todo of filteredTodosList) {
    fetchDeleteCalls.push(fetch(`http://localhost:4730/todos/${todo.id}`, {
      method: "DELETE",
    }));
  }
  Promise.all(fetchDeleteCalls).then(() => loadTodos());  
}