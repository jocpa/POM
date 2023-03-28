///<reference types="cypress" />

import webBank from "../pages/webBank"

describe('Web Bank Security Test', () => {
   
    const url = 'http://zero.webappsecurity.com/'
    const username = 'username'
    const password = 'password'
    const amount = 500

    beforeEach(() => {
        cy.visit(url)
    })

    it('smoke test', () => {
        cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.url().should('eq', url)
        cy.location('protocol').should('contains', 'http')
    })

    it('Login test', () => {
        
        webBank.clickSigninBtn() 
        cy.location('pathname').should('eq', '/login.html')

        webBank.inputUsername(username)
        webBank.inputPassword(password)
        webBank.clickSignBtn()


        webBank.transferFoundsClick() 
        cy.location('pathname').should('eq', '/bank/transfer-funds.html')

        webBank.selectFromAccount(1)
        webBank.selectToAccount(3)
        webBank.totalAmount(amount)
        webBank.sendDescription('description')
        webBank.continueBtnClick()
        cy.location('pathname').should('eq', '/bank/transfer-funds-verify.html')

        webBank.submitBtnClick()
        cy.location('pathname').should('eq', '/bank/transfer-funds-confirm.html')

        webBank.elements.succesAlert().should('have.class', 'alert-success')
    })

})