const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")

Given('I open login page', ()=>{
    cy.visit('http://zero.webappsecurity.com/login.html')

})

When('I submit login', ()=>{
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.contains('Sign in').click()

})

Then('I should see myhomepage', ()=>{
    // cy.get('#account_summary_tab').should('be.visible')
    cy.get(':nth-child(3) > .dropdown-toggle').should('contain', "username")
})