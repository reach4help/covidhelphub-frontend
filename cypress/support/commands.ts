// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getByTestId', (testId: string) => {
  cy.get(`[data-testid=${testId}]`);
});
