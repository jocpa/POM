import webBank from "../pages/webBank"

describe('Web Bank Security Test', () => {
   
    const url = 'http://zero.webappsecurity.com/'
    const username = 'username'
    const password = 'password'

    it('smoke test', () => {
        cy.visit(url)
    })

    it('Login test', () => {
        cy.visit(url)
        
        webBank.clickSigninBtn() 
        webBank.inputUsername(username)
        webBank.inputPassword(password)
        webBank.clickSignBtn()
    })

})