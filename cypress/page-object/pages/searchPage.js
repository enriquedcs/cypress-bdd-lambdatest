const URL = "https://ecommerce-playground.lambdatest.io/"
const search = "#search"

class SearchPage{
    static visitPage(){
        cy.visit(URL)
    }

    static searchPrd(name){
        cy.get(search)
        .type(name+'{enter}')
    }

}

export default SearchPage
