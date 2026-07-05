before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
})
// when we have more than one class we can use it.only to run only that class and ignore the rest of the classes
// => == function(){}








before('Visit login page ', function(){
 cy.clearCookies();
cy.clearLocalStorage();

 cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')// Visit website
cy.get('[name="username"]').type('admin', { delay: 200 }) // Enter username 
cy.get('[name="password"]').type('admin123', { delay: 200 })// Enter password
cy.get('.oxd-button').click()// click on login button
 })


it('Add Delete employee', function(){
// Add employee
// Visit website
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
cy.wait(5000) // wait for 5  seconds


//Search employee and delete employee
cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click on Admin
cy.get(':nth-child(2) > .oxd-input').type('Rararara') // enter username in search field
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click on dropdown
cy.get('.oxd-select-dropdown > :nth-child(2)').click() // select option from dropdown
cy.get('.oxd-form-actions > .oxd-button--secondary').click() // click on search button
cy.wait(2000)
cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click() // click on delete button 
cy.get('.oxd-button--label-danger').click()  // click on confirm delete button 
cy.wait(5000) // wait for 2 seconds



})
it('Add Delete Job Title', function(){
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


 })
// it('my Info', function(){



// // })
 after('Logout Employee', function(){
cy.get('.oxd-userdropdown-tab > .oxd-icon').click() // click on user dropdown
cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click on logout button
cy.wait(2000) // wait for 2 seconds
 })