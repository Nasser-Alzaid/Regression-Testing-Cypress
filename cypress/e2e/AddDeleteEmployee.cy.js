it.only('Add and Delete Employee', function() {
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

})