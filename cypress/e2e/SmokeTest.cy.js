import inventoryPage from "../pages/inventoryPage"

///<reference types="cypress" />


describe('Smoke Test', () => {
    const url = 'https://opensource-demo.orangehrmlive.com/'

    it('Should visit url', () => {

        cy.visit(url)
        inventoryPage.elements.orangeLogo().should('exist')
        
    })

})

