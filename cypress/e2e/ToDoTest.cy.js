describe('To-Do List Application', () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit('/');
  });

  it('should load existing to-do tasks', () => {
    cy.get("ul").should("exist");
  });

  it('should allow adding a new to-do item', () => {
    const newTodo = 'Buy groceries';
    cy.get('[data-cy=ToDoInput]').type(newTodo)
    cy.get('[data-cy=Submit').click();
    cy.contains('Buy groceries').should('exist');
  });

  it('should allow deleting a to-do item', () => {
    let toDoId;
    const newTodo = 'Take out the trash';
      // Add a new to-do item
    cy.get('[data-cy=ToDoInput]').type(newTodo)
    cy.get('[data-cy=Submit').click();

    // Grab the id of the added to-do item
    cy.get('[data-cy^="toDo-item-"]')
      .contains(newTodo)
      .parent()
      .invoke("attr", "data-cy")
      .then((dataCy) => {
        const toDoId = dataCy.split("-")[2];
        cy.get(`[data-cy="toDo-item-${toDoId}"]`).find('[data-cy="Delete"]').click();
        cy.get(`[data-cy="toDo-item-${toDoId}"]`).should("not.exist");
    });
  });
});
