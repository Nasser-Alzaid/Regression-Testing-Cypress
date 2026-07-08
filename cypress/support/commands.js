// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('admin', { delay: 200 })
    cy.get('[name="password"]').type('admin123', { delay: 200 })
    cy.get('.oxd-button').click()
    cy.wait(2000) // wait for 2 seconds
})

Cypress.Commands.add('AddEmployee', () => {
    // Add employee
cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click on PIM
cy.get('.orangehrm-header-container > .oxd-button').click() // click on add employee button
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click on dropdown
cy.get('.oxd-select-dropdown > :nth-child(2)').click() // select option from dropdown
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click on dropdown
cy.get('.oxd-select-dropdown > :nth-child(2)').click() // select option from dropdown
cy.get('.oxd-autocomplete-text-input > input').type('A', { delay: 200 }) // enter first letter of employee name
cy.get('.oxd-autocomplete-dropdown > :nth-child(3)').click() // select option from dropdown
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rararara',{ delay: 200 }) // enter Username
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rararara@123', { delay: 200 }) // enter password
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rararara@123', { delay: 200 }) // confirm password
cy.get('.oxd-button--secondary').click() // click on save button
cy.wait(5000)
})

Cypress.Commands.add('DeleteEmployee', () => {

    //Search employee and delete employee
cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click on Admin
cy.get(':nth-child(2) > .oxd-input').type('Rararara') // enter username in search field
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click on dropdown
cy.get('.oxd-select-dropdown > :nth-child(2)').click() // select option from dropdown
cy.get('.oxd-form-actions > .oxd-button--secondary').click() // click on search button
cy.wait(2000)
cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click() // click on delete button 
cy.get('.oxd-button--label-danger').click()  // click on confirm delete button 
})


Cypress.Commands.add('AddJobTitle', () => {
        // Add job title
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click on Admin
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click() // click on Job dropdown
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // click on Job Titles
    cy.get('.oxd-button').click() // click on add button
    cy.get(':nth-child(2) > .oxd-input').type('CEO. Nasser', { delay: 200 }) // enter job title
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('CEO. Nasser is the Chief Executive Officer of the company', { delay: 200 }) // enter job description
    cy.get('.oxd-file-button').click() // click on choose file 
    cy.wait(2000) // wait for 2 seconds
  cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/1st Version_CV.pdf', { force: true })
  cy.get('.oxd-button--secondary').click() // click on save button
  cy.wait(3000) // wait for 2 seconds
})

Cypress.Commands.add('DeleteJobTitle', () => {
      // Delete Job title assertion
  cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click on Admin
  cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click() // click on Job dropdown
  cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // click on Job Titles
//   cy.get('.oxd-table-body').should('contain', 'CEO. Nasser').then(() => cy.log('Job title verified'));
//         cy.wait(4000);
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
})

Cypress.Commands.add('EditProfile', () => {
    // Edit profile
cy.get(':nth-child(6) > .oxd-main-menu-item').click() // click on My Info
cy.get('input, textarea').each(($el) => {
    cy.wrap($el).clear({ force: true });});
cy.get('.employee-image').click() // click on profile picture
cy.get('.oxd-file-div > .oxd-icon-button').click() // click on choose file
cy.wait(2000) // wait for 2 seconds
cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/4.png', { force: true })
cy.get('.oxd-button--secondary').click() // click on save button
cy.wait(3000) // wait for 2 seconds
cy.get(':nth-child(1) > .orangehrm-tabs-item').click() // click on personal detailsd 
cy.get('[name="firstName"]').clear().type('Khalid', { delay: 200 }) // enter first name
cy.get('[name="middleName"]').clear().type('Ali', { delay: 200 }) // enter middle name
cy.get('[name="lastName"]').clear().type('Alshammari', { delay: 200 }) // enter last name
// cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click() // Male 
// cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click() // click on date of birth
// cy.get('.oxd-calendar-selector-year-selected > .oxd-icon').click() // click on year dropdown
// cy.get('.oxd-calendar-dropdown > :nth-child(3)').click() // select year
// cy.get('.oxd-calendar-selector-month-selected > .oxd-icon').click() // click on month dropdown
// cy.get('.oxd-calendar-selector-year > .oxd-calendar-dropdown > :nth-child(4)').click() // select month
// cy.get(':nth-child(30) > .oxd-calendar-date').click() // select date
// cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click() // click on save button   
})

Cypress.Commands.add('logout', () => {
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})

