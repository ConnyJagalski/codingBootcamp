/// <reference types="cypress" />

describe("Todo App", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:62303");
  });
  beforeEach(() => {
    cy.visit("http://localhost:62303/");
  });
  it("add new todo", () => {
    cy.get('[data-cy="new-todo"]').type(new Date() + "");
    cy.get('[data-cy="add-todo"]').click();
  });
  it("check done todo filter", () => {
    cy.get('[data-cy="filter-done"]').click();
    cy.get('[data-cy="todo-list"] li input').should("be.checked");
  });
  it("check all todo filter", () => {
    cy.get('[data-cy="filter-all"]').click();
    cy.get('[data-cy="todo-list"] li input').should("have.length", 3);
  });
  it("check open todo filter", () => {
    cy.get('[data-cy="filter-open"]').click();
    cy.get('[data-cy="todo-list"] li input').not("be.checked");
  });
  it("delete done todos", () => {
    cy.get('[data-cy="delete-todos"]').click();
    cy.get('[data-cy="todo-list"] li input').not("be.checked");
  });
  it("has no duplicates", () => {
    cy.get('[data-cy="new-todo"]').type("eins");
    cy.get('[data-cy="add-todo"]').click();
    cy.get('[data-cy="new-todo"]').should("have.value", "Todo already exists!");
  });
});
