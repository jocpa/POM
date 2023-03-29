class amazonTest {

    elements = {
        navLogo: () => cy.get('#nav-logo-sprites'),
        searchBar: () => cy.get('#twotabsearchtextbox'),
        nextPage: () => cy.get('.s-pagination-next'),
        thirdElement: () => cy.xpath('/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[6]/div/div/div/div/div/div[1]/div/div[2]/div/span/a/div/img'),
        addToCart: () => cy.xpath('/html/body/div[1]/div[2]/div[9]/div[6]/div[1]/div[5]/div/div[1]/div/div/div/form/div/div/div/div/div[3]/div/div[13]/div[1]/span/span'),
        addedAlert: () => cy.get('#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading')
    }

    typeSearchBar(element) {
        this.elements.searchBar().type(element)
    }
    clickNextPage() {
        this.elements.nextPage().click()
    }
    clickThirdElement() {
        this.elements.thirdElement().click()
    }
    clickAddToCart() {
        this.elements.addToCart().click()
    }

}
module.exports = new amazonTest();