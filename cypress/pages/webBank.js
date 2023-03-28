
class webBank {

    elements = {
        brandText: () => cy.get('.brand'),
        signinBtn: () => cy.get('#signin_button'),
        loginUsername: () => cy.get('#user_login'),
        passwordInput: () => cy.get('#user_password'),
        signBtn: () => cy.get('.btn'),
        transferFounds: () => cy.get('#transfer_funds_tab > a'),
        fromAccount: () => cy.get('#transfer_funds_tab > a'),
        toAccount: () => cy.get('#tf_toAccountId'),
        amount: () => cy.get('#tf_amount'),
        description: () => cy.get('#tf_description'),
        continueBtn: () => cy.get('#btn_submit'),
        submitBtn: () => cy.get('#btn_submit'),
        succesAlert: () => cy.get('.alert')
    }
  
    clickSigninBtn() {
        this.elements.signinBtn().click()
    }
    inputUsername(user) {
        this.elements.loginUsername().type(user)
    }
    inputPassword(password) {
        this.elements.passwordInput().type(password)
    }
    clickSignBtn() {
        this.elements.signBtn().click()
    }
    transferFoundsClick() {
        this.elements.transferFounds().click()
    }
    selectFromAccount(fr) {
        this.elements.fromAccount().select(fr)
    }
    selectToAccount(to) {
        this.elements.toAccount().select(to)
    }
    totalAmount(am) {
        this.elements.amount().type(am)
    }
    sendDescription(desc) {
        this.elements.description().type(desc)
    }
    continueBtnClick() {
        this.elements.continueBtn().click()
    }
    submitBtnClick() {
        this.elements.submitBtn().click()
    }

}
module.exports = new webBank()