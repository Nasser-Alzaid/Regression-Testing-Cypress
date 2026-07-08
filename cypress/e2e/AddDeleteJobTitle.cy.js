before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
})

it.only('Add and Delete Job Title', function() {


cy.login() // call login command from commands.js

  
   // Add job title
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click on Admin
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click() // click on Job dropdown
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // click on Job Titles
    cy.get('.oxd-button').click() // click on add button
    cy.get(':nth-child(2) > .oxd-input').type('CEO. Nasser', { delay: 200 }) // enter job title
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('CEO. Nasser is the Chief Executive Officer of the company')// enter job description
    cy.get('.oxd-file-button').click() // click on choose file 
    cy.wait(2000) // wait for 2 seconds
  cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/1st Version_CV.pdf', { force: true })
  cy.get('.oxd-button--secondary').click() // click on save button
  cy.wait(3000) // wait for 2 seconds


  // Delete Job title assertion
  cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click on Admin
  cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click() // click on Job dropdown
  cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // click on Job Titles   cy.get('.oxd-table-body').should('contain', 'CEO. Nasser').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'CEO. Nasser')
            .scrollIntoView({ duration: 300 })
            .should('exist')
            .within(() => {
                // checkbox click
                cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                    .click({ force: true });
                // click trash
                cy.get(':nth-child(1) > .oxd-icon')
                    .should('be.visible')
                    .click({ force: true, multiple: true });
            });
        cy.wait(1000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete

    cy.logout() // call logout command from commands.js


})