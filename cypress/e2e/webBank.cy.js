import webBank from "../pages/webBank"

describe('Web Bank Security Test', () => {
   
    const url = 'http://zero.webappsecurity.com/'
    const username = 'username'
    const password = 'password'
    const amount = 500

    it('smoke test', () => {
        cy.visit(url)
    })

    it('Login test', () => {
        cy.visit(url)
        
        webBank.clickSigninBtn() 
        webBank.inputUsername(username)
        webBank.inputPassword(password)
        webBank.clickSignBtn()

        webBank.transferFoundsClick() 
        webBank.selectFromAccount(1)
        webBank.selectToAccount(3)
        webBank.totalAmount(amount)
        webBank.sendDescription('description')
        webBank.continueBtnClick()
        webBank.submitBtnClick()
    })

})