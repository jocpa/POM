import datePicker from "../pages/datePicker"

///<reference types="cypress" />

describe('Date picker Test', () => {
    const url  = 'https://material.angular.io/components/datepicker/overview'
    
    it('should select a datetime', () => {
        cy.visit(url)
        
        datePicker.elements.h1Text().should('exist');
        datePicker.typeDate('01/10/2000')
        datePicker.clickIcon()
        
    })
})