describe('App', () => {
  it('shows paragraph tag', () => {
    cy.visit('/');
    cy.getBySel('p').should('be.visible');
    cy.getBySel('foo').should('be.visible');
  });
});

