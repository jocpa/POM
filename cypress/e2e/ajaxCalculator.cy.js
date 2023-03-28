import ajaxCalculator, { typeValueA } from "../pages/ajaxCalculator"

///<reference types="cypress" />

describe('Ajax Calculator', () => {
    const url = 'https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/'
    const a = 10
    const b = 35
    const op = 3  // 0: +, 1: -, 2: *, 3: /
    const result = a / b

    

    beforeEach(() => {
        cy.visit(url)
    })

    it('should return a correct value', () => {

        ajaxCalculator.typeValueA(a)
        ajaxCalculator.typeValueB(b)
        ajaxCalculator.selectOperation(op)  // 0: +, 1: -, 2: *, 3: /
        ajaxCalculator.elements.Result().invoke('text')
                                        .should('equal', `${a} / ${b} = ${result}`)

    })

})