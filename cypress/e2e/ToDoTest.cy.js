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
    //cy.get('input').should('have.attr', 'placeholder', 'Add a new To Do').type(newTodo);
    cy.get('[data-cy=Submit').click();
    //cy.contains('button', 'Add').click();
    cy.contains('Buy groceries').should('exist');
  });

  it('should allow deleting a to-do item', () => {
    const newTodo = 'Take out the trash';
    cy.get('[data-cy=ToDoInput]').type(newTodo)
    cy.get('[data-cy=Submit').click();
    ccy.get('[data-cy^="toDo-item-"]').contains("Test ToDo").each(($el) => {
      cy.wrap($el).parent().find('[data-cy="Delete"]').click();
    });
    cy.contains(newTodo).should('not.exist');
  });
});
