before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
})

 
before('Visit login page ', function(){
cy.login() // call login command from commands.js   
})
// Add and delete employee
it('Add Delete employee', function(){
cy.AddEmployee() // call AddEmployee command from commands.js
cy.DeleteEmployee() // call DeleteEmployee command from commands.js
})

it('Add Delete Job Title', function(){
    //Add and delete job title
    cy.AddJobTitle() // call AddJobTitle command from commands.js
    cy.DeleteJobTitle() // call DeleteJobTitle command from commands.js
})
it('Edit profile', function(){
    // Edit profile
    cy.EditProfile() // call EditProfile command from commands.js
})

after('Logout', function(){
    // Logout
    cy.Logout() // call Logout command from commands.js
})
