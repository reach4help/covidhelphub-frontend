/// <reference types="cypress" />

describe('Navigation test', () => {
  before(() => {
    cy.visit('/');
  });
  it('Loads homepage correctly', () => {
    cy.contains('Content for" / "TBD');
  });

  context('Main Navbar', () => {
    const pages: {
      name: string;
      text: string;
    }[] = [
      { name: 'account', text: 'Content for" /account "TBD' },
      { name: 'volunteers', text: 'Content for" /volunteers "TBD' },
      { name: 'beneficiaries', text: 'Content for" /beneficiaries "TBD' },
      // { name: 'programs', text: 'This is the Programs Page' },
      { name: 'form', text: 'Beneficiary forms' },
    ];

    pages.forEach((page) => {
      it(`navigates to ${page.name} page correctly and loads content correctly`, () => {
        cy.getByTestId(page.name).click();
        cy.location('pathname').should('eq', `/${page.name}`);
        cy.contains(page.text);
      });
    });
  });
  
  context('Program Stages Navbar', () => {
    before(() => {
      cy.visit('/programs');
    });

    const programStagePages: {
      name: string;
      text: string;
    }[] = [
      { name: 'open', text: 'Program Stage - Open' },
      { name: 'matching', text: 'Program Stage - Matching' },
      { name: 'scheduled', text: 'Program Stage - Scheduled' },
      { name: 'inprogress', text: 'Program Stage - In Progress' },
      { name: 'closed', text: 'Program Stage - Closed' },
      { name: 'canceled', text: 'Program Stage - Canceled' },
    ];

    programStagePages.forEach((page) => {
      it(`navigates to ${page.name} program stage page correctly and loads content correctly`, () => {
        cy.getByTestId(page.name).click();
        cy.location('pathname').should('eq', `/programs/${page.name}`);
        cy.contains(page.text);
      });
    });
  });
});
