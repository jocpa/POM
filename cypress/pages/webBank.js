
class webBank {

    elements = {
        brandText: () => cy.get('.brand'),
        signinBtn: () => cy.get('#signin_button'),
        loginInput: () => cy.get('#user_login'),
        passwordInput: () => cy.get('#user_password'),
        signBtn: () => cy.get('.btn')
    }

}