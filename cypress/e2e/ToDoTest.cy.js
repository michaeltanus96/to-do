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
    cy.get('input').should('have.attr', 'placeholder', 'Add a new To Do').type(newTodo);
    cy.contains('button', 'Add').click();
    cy.contains('Buy groceries').should('exist');
  });

  it.skip('should allow deleting a to-do item', () => {
    const newTodo = 'Take out the trash';
    cy.get('input#myInput').type(newTodo);
    cy.contains('input', 'Add a new To Do').type(newTodo)
    cy.contains('button', 'Add').click();
    cy.get('ul#myUL > li').contains(newTodo).within(() => {
      cy.get('span.close').click();
    });
    cy.get('ul#myUL > li').contains(newTodo).should('not.exist');
  });
});
