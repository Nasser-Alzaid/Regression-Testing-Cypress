
before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
})



it.only('Edit profile', function(){




//cy.login() // call login command from commands.js

// Edit profile
cy.get(':nth-child(6) > .oxd-main-menu-item').click() // click on My Info
cy.get('.employee-image').click() // click on profile picture
cy.get('.oxd-file-div > .oxd-icon-button').click() // click on choose file
cy.get('input[type="file"]').selectFile('cypress/fixtures/4.png', { force: true })  //upload file
cy.get('.oxd-button--secondary').click() // click on save button
cy.get(':nth-child(6) > .oxd-main-menu-item').click() // click on My Info
cy.get(':nth-child(1) > .orangehrm-tabs-item').click() // click on personal details
cy.wait(1000)

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