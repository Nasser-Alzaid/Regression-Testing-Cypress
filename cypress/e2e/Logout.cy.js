it.only('Logout', function() {
cy.get('.oxd-userdropdown-tab > .oxd-icon').click() // click on user dropdown
cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click on logout button
cy.wait(2000) // wait for 2 seconds
})