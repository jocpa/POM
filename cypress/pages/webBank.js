
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
  
    
    

}