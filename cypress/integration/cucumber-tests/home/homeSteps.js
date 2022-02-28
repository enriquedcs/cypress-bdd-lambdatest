import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open home page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
}) 
    
Then('I should see Homepage', () => {    
    cy.get('#search').should('be.visible')
})

