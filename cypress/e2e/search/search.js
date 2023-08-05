/// <reference types = "cypress"/>

import search from "./search_step"
const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")

Given('i open the Application', ()=>{
    // cy.visit('http://zero.webappsecurity.com/')
    search.visit()
})

When('i input keyword',()=>{
    let keyword = "zero"
    // cy.get('#searchTerm').clear().type('zero{enter}')
    search.fillSearch(keyword{enter})
})

Then('i see result of keyword', ()=>{
    cy.get('h2').should('be.visible')
    cy.url().should('include', "zero")
})