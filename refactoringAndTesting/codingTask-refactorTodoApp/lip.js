export function initApp() {
  const newTodo = document.getElementById("newTodo");
  const add = document.getElementById("add");
  const list = document.querySelector("ul");
  const ulElements = list.querySelectorAll("li");
  const open = document.getElementById("open");
  const all = document.getElementById("all");
  const done = document.getElementById("done");
  const remove = document.getElementById("remove");

  add.addEventListener("click", addTodoEvent);
  newTodo.addEventListener("click", clearField);
  document.addEventListener("keydown", addTodoEvent);
  open.addEventListener("input", showOpen);
  all.addEventListener("input", showAll);
  done.addEventListener("input", showDone);
  remove.addEventListener("click", removeDone);

  function clearField() {
    newTodo.value = "";
  }

  let todos = [];

  function loadTodos() {
    const todosJSON = localStorage.getItem("todos");

    if (todosJSON !== null) {
      todos = JSON.parse(todosJSON);

      todos.forEach((element) => {
        const { id, done, description } = element;

        createTodoItem(id, done, description);
      });
    } else {
      todos = [];
    }
  }

  loadTodos();

  function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function generateUniqueId() {
    let liId;
    do {
      liId = Math.floor(Math.random() * 9000) + 1000;
    } while (todos.some((todo) => todo.id === liId));
    return liId;
  }

  function createCheckbox(done) {
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = done;
    newCheckbox.addEventListener("change", function () {
      updateDone(id, newCheckbox.checked);
    });
    return newCheckbox;
  }

  function createTodoItem(id, done, description) {
    const newItem = document.createElement("li");

    const whatTodo = document.createTextNode(description);
    newItem.append(createCheckbox(done), whatTodo);

    list.appendChild(newItem);
    newItem.setAttribute("id", `${id}`);
  }

  function checkValueForEmptyness(todoText) {
    return todoText === "";
  }

  function checkValueForErrorText(todoText) {
    return todoText === "Aufgabe existiert bereits!";
  }

  function checkForExistingTodo(todoText) {
    const existingTodo = todos.find(
      (todo) => todo.description.toUpperCase() === todoText.toUpperCase()
    );
    return existingTodo;
  }

  function addTodo() {
    const todoText = newTodo.value.trim();

    if (checkValueForEmptyness(todoText)) {
      return;
    } else if (checkValueForErrorText(todoText)) {
      newTodo.value = "";
      return;
    } else if (checkForExistingTodo(todoText)) {
      newTodo.value = "Aufgabe existiert bereits!";
      return;
    } else {
      const liId = generateUniqueId();
      createTodoItem(liId, false, todoText);

      const completeTodoItem = {
        description: todoText,
        id: liId,
        done: false,
      };
      todos.push(completeTodoItem);

      newTodo.value = "";
      storeTodos();
    }
  }

  function checkForEventKey(eventKey) {
    return eventKey.key === "Enter" || eventKey.type === "click";
  }

  function addTodoEvent(event) {
    const eventKey = event;
    if (checkForEventKey(eventKey)) {
      addTodo();
    }
  }

  function checkForSameId(todo, id) {
    return todo.id === id;
  }

  function updateDone(id, isChecked) {
    todos.forEach((todo) => {
      if (checkForSameId(todo, id)) {
        todo.done = isChecked;
      }
    });

    storeTodos();
  }

  function showOpen() {
    list.innerHTML = "";

    const openTodos = todos.filter((item) => !item.done);

    openTodos.forEach((openTodo) => {
      createTodoItem(openTodo.id, openTodo.done, openTodo.description);
    });
  }

  function showAll() {
    list.innerHTML = "";

    const allTodos = todos;

    allTodos.forEach((allTodo) => {
      createTodoItem(allTodo.id, allTodo.done, allTodo.description);
    });
  }

  function showDone() {
    list.innerHTML = "";

    const doneTodos = todos.filter((item) => item.done);

    doneTodos.forEach((doneTodo) => {
      createTodoItem(doneTodo.id, doneTodo.done, doneTodo.description);
    });
  }

  function removeDone() {
    const filteredList = todos.filter(function (obj) {
      return obj.done === false;
    });

    todos = filteredList;
    list.innerHTML = "";

    filteredList.forEach((todo) => {
      createTodoItem(todo.id, todo.done, todo.description);
    });

    storeTodos();
  }
}
