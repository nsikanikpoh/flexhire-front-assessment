describe('profile spec', () => {
  it('The profile page displays core sections', () => {
    cy.visit("/");
    cy.get('[data-cy="user-map"]').should('be.visible');
    cy.get('[data-cy="profile-user-name"]').should('be.visible');
    cy.get('[data-cy="profile-freelancer-rate"]').should('be.visible');
    cy.get('[data-cy="profile-introduction"]').should('be.visible');
    cy.contains('years experience')
    cy.get('[data-cy="profile-answers-tab-btn"]').click({ force: true })
    cy.get('[data-cy="profile-user-answers-container"]').should('be.visible');
    cy.get('[data-cy="profile-jobs-tab-btn"]').click({ force: true })
    cy.get('[data-cy="profile-user-jobs-container"]').should('be.visible');

    cy.contains('Enter API key')
    cy.get('input[name="apiKey"]')
    .type('343442')
    .should("have.value", '343442');
    cy.get('[data-cy="apiKey-btn"]').should('be.visible');
  })
})