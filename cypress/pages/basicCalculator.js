
class basicCalculator {

    elements = {
        valueA: () => cy.get('#number1Field'),
        valueB: () => cy.get('#number2Field'),
        selectOperation: () => cy.get('#selectOperationDropdown'),
        calculateBtn: () => cy.get('#calculateButton'),
        answerField: () => cy.get('#numberAnswerField')
    }

    typeValueA(a) {
        this.elements.valueA().type(a)
    }
    typeValueB(b) {
        this.elements.valueB().type(b)
    }
    operationType(op) {
        this.elements.selectOperation().select(op)
    }
    clickCalculate() {
        this.elements.calculateBtn().click()
    }

}

module.exports = new basicCalculator();