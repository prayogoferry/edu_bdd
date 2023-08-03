/// <reference types = "cypress"/>
const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")



Given('i open the Application', ()=>{
    cy.visit('http://zero.webappsecurity.com/')
})

When('i input keyword',()=>{
    cy.get('#searchTerm').clear().type('zero{enter}')
})

Then('i see result of keyword', ()=>{
    cy.get('h2').should('be.visible')
    cy.url().should('include', "zero")
})