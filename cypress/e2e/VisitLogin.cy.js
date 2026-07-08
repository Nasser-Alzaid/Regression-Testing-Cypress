before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
})

it.only('Login' , function(){

    // Visit the login page
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Visit website
cy.wait(2000) // wait for 2 seconds
cy.get('[name="username"]').type('admin', { delay: 200 }) // Enter username 
cy.get('[name="password"]').type('admin123', { delay: 200 })// Enter password
cy.get('.oxd-button').click()// click on login button
cy.wait(2000) // wait for 2 seconds
})