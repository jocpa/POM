class practiceForm {

    elements = {
        logo: () => cy.get('img'),
        headerText: () => cy.get('.display-3'),
        inputName:() => cy.get('#name'),
        inputMobileNumber: () => cy.get('#phone'),
        inputEmail: () => cy.get('#email'),
        inputPassword: () => cy.get('#password'),
        inputAdress: () => cy.get('#address'),
        genderButton: () => cy.get('#male'),
        dayButton: () => cy.get('#wednesday'),
        travelSelect: () => cy.get('.custom-select'),
        experienceButton: () => cy.get(':nth-child(6) > .card-body > :nth-child(1) > :nth-child(2)'),
        frameworkButton: () => cy.get(':nth-child(6) > .card-body > :nth-child(2) > :nth-child(2)')
    }

    typeName(name) {
        this.elements.inputName().type(name)
    }
    typeMobileNumber(mobile) {
        this.elements.inputMobileNumber().type(mobile)
    }
    typeEmail(email) {
        this.elements.inputEmail().type(email)
    }
    typePassword(password) {
        this.elements.inputPassword().type(password)
    }
    typeAddres(address) {
        this.elements.inputAdress().type(address)
    }
    gender() {
        this.elements.genderButton().click()
    }
    bestDay() {
        this.elements.dayButton().click()
    }
    travelCountry(op) {
        this.elements.travelSelect().select(op)
    }
    experience() {
        this.elements.experienceButton().click()
    }
    framework() {
        this.elements.frameworkButton().click()
    }
}
module.exports = new practiceForm()