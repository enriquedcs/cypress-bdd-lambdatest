
import SearchPage from '../cucumber-tests/search/searchPage'

describe('Testing Cypress', () => {
    before(function(){
        SearchPage.visitPage()
    })
   
    it('verify Search Mac', () =>{
     
        SearchPage.searchPrd("Mac")
        cy.get(`div:nth-of-type(1) > .product-thumb`)
        .should('be.visible')

    })

    it('Verify Search Monitor', () =>{   

        SearchPage.searchPrd("Mac")
        cy.get(`div:nth-of-type(1) > .product-thumb`)
        .should('not.exist')

    })

    it('Verify Search Samsung', () => {

        SearchPage.searchPrd("Samsung")
        cy.get(`div:nth-of-type(1) > .product-thumb`)
        .should('not.exist')
        
    })

})