
class ajaxCalculator {

    elements = {
        h1Text: () => cy.get('h1'),
        aValue: () => cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine'),
        bValue: () => cy.get(':nth-child(2) > :nth-child(2) > .ng-pristine'),
        opOption: () => cy.get('.ng-pristine'),
        Result: () => cy.get('.result')
    }

    typeValueA(a) {
        this.elements.aValue().type(a)
    }
    typeValueB(b) {
        this.elements.bValue().type(b)
    }
    selectOperation(op) {
        this.elements.opOption().select(op)
    }

}

module.exports = new ajaxCalculator();