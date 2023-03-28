
class homeOrangePage {

    elemets = {
        usernameInput: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        userPassword: () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        loginBtn: () => cy.get('.oxd-button')
    }

    typeUsername(username) {
        this.elemets.usernameInput().type(username)
    }

    typePassword(password){
        this.elemets.userPassword().type(password)
    }

    clickLogin(){
        this.elemets.loginBtn().click()
    }
}

module.exports = new homeOrangePage();