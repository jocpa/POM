import practiceForm from "../pages/practiceForm"

///<reference types="cypress" />

describe('Practice form Test', () => {
    const url = 'https://itera-qa.azurewebsites.net/home/automation'
    
    it('should fill the fields of the form', () => {
        cy.visit(url)

        practiceForm.elements.logo().should('exist')
        practiceForm.elements.headerText().invoke('text')
                                          .should('eq', 'Test automation practice form')
        
        practiceForm.typeName('Miles')
        practiceForm.typeMobileNumber('54168148')
        practiceForm.typeEmail('Miles@miles.com')
        practiceForm.typePassword('password123')
        practiceForm.typeAddres('brooklyn')
        practiceForm.gender()
        practiceForm.bestDay()
        practiceForm.travelCountry(1)
        practiceForm.experience()
        practiceForm.framework()
    })
})