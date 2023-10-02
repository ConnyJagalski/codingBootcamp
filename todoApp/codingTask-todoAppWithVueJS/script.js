"use strict"

Vue.createApp({
  data() {
    return {
      todoList: [],
      currentShownList: [],
      doneTodos: [],
      openTodos: [],
    };
  },

  methods: {

    // wenn die checkbox geklickt wird, verändert sich der state des done des jeweiligen todos ins gegenteil:

    changeStateOfTodo(id) {
      const index = this.todoList.findIndex(todo => todo.id === id);
      const item = this.todoList[index];
      if (index !== -1) {
        item.done = !item.done;
      }
      this.updateBackendTodoList(item);
    },

    // übertrage veränderte daten ins backend und aktualisiere lokale todo liste

    updateBackendTodoList(item) {
      fetch(`http://localhost:4730/todos/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
      })
      .then((res) => res.json())
      .then(updatedItem => {
        const index = this.todoList.findIndex(todo => todo.id === updatedItem.id);
        if (index !== -1) {
          this.todoList[index] = updatedItem;
        }
      })
    },

    // prüfen ob das eingegebene todo bereits existiert oder zu kurz ist

    validateInput() {
      newTodo.value = newTodo.value.trim();

      if (newTodo.value.length < 3) {
        newTodo.value = "Todo too short!";
      } else {
        const newElement = { description: newTodo.value, done: false };

        const todoExists = this.todoList.some(todo => todo.description.toUpperCase() === newTodo.value.toUpperCase());

        if (todoExists) {
          newTodo.value = "Todo already exists!";
          return
        } else if (newTodo.value === "Todo already exists!" || newTodo.value === "Todo too short!") {
          newTodo.value = "";
        } else {
          this.addNewTodo(newElement);
        }
      }
    },

    // neues todo dem backend hinzufügen

    addNewTodo(newElement) {
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
          this.loadTodoListFromBackend();
        });
    },

    // die todoliste aus dem backend laden und sie in den lokalen state übertragen:

    loadTodoListFromBackend() {
      fetch("http://localhost:4730/todos")
        .then(response => response.json())
        .then((data) => this.todoList = data)
        .then(() => this.currentShownList = this.todoList);
    },

    // alle todos anzeigen

    showAllTodos() {
      this.currentShownList = this.todoList;
    },

    // filter für die offenen todos

    showOpenTodos() {
      const filteredList = this.todoList.filter(todo => todo.done === false);
      this.doneTodos = filteredList;
      this.currentShownList = this.doneTodos;
    },

    // filter für die erledigten todos

    showDoneTodos() {
      const filteredList = this.todoList.filter(todo => todo.done === true);
      this.doneTodos = filteredList;
      this.currentShownList = this.doneTodos;
    },

    // erledigte todos löschen

    async removeDone() {
      this.showDoneTodos();
      const fetchDeleteCalls = [];

      for (const todo of this.doneTodos) {
        fetchDeleteCalls.push(fetch(`http://localhost:4730/todos/${todo.id}`, {
          method: "DELETE",
        }));
      }
      Promise.all(fetchDeleteCalls).then(() => this.loadTodoListFromBackend());  
    }
  },

  // beim öffnen der seite die todos aus dem backend laden
  // wieso klappt das nicht mit dem code, wie im video ? also mit async und await ?

  created() {
    this.loadTodoListFromBackend();
  },
}).mount("#app");