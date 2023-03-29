import amazonTest from "../pages/amazonTest";

///<reference types="cypress" />

describe('Amazon Test', () => {
    const url = 'https://www.amazon.com/';

    beforeEach(() => {
       cy.visit(url)
    });

    it('Smoke Test', () => {
        cy.title().should('eq','Amazon.com. Spend less. Smile more.')
        cy.url().should('eq', url)
        cy.location('protocol').should('contains', 'http')
        amazonTest.elements.navLogo().should('exist')
    })

    it.only('should search for alexa', () => {
        amazonTest.typeSearchBar('alexa')
        amazonTest.elements.searchBar().type('{enter}')
        amazonTest.clickNextPage()
        amazonTest.clickThirdElement()
        amazonTest.elements.addToCart().should('exist')
        cy.wait(3000)
        amazonTest.clickAddToCart()
    })
    
      
})