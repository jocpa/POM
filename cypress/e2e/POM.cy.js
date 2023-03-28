import homeOrangePage from "../pages/homeOrangePage"
import inventoryPage from "../pages/inventoryPage"

///<reference types="cypress" />

describe('Login implementation', () => {
  const url = 'https://opensource-demo.orangehrmlive.com/'
  const username = 'admin'
  const password = 'admin123'

  beforeEach(() => {
    cy.visit(url)
  })

  it('should login admin page', () => {
  
    homeOrangePage.typeUsername(username)
    homeOrangePage.typePassword(password)
    homeOrangePage.clickLogin()

    inventoryPage.elements.imgBanner().should('exist')
    inventoryPage.elements.timeText().invoke('text')
                                     .should('equal', 'Time at Work');
    

  })
    
})