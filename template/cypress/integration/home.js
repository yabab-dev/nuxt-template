describe('HomePage', () => {
  it('loads', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Home Page');
  });
});
