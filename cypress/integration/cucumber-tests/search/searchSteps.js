import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import SearchPage from './searchPage'

Given('I open home page', () => {
    SearchPage.visitPage()
}) 

When('I search for {string}', Mac => {    
    SearchPage.searchPrd(Mac)

})
    
Then('I should see Product Available', () => {    
    cy.get(`div:nth-of-type(1) > .product-thumb`)
        .should('be.visible')
})

Then('I should Not see Product Available', () => {    
    cy.get(`div:nth-of-type(1) > .product-thumb`)
        .should('not.exist')
})
