const URL = "http://zero.webappsecurity.com/"
const SEARCH = '#searchTerm'

class search {
    static visit(){
        cy.visit(URL)
    }

    static fillSearch(keyword){
        cy.get(SEARCH).clear().type(keyword)
    }
}

export default search