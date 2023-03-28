import basicCalculator from "../pages/basicCalculator"

///<reference types="cypress" />

describe('Basic Calculator Test', () => {
    const url = 'https://testsheepnz.github.io/BasicCalculator.html'
    const a = 20
    const b = 10
    const op = 0 // 0: +, 1: -, 2: *, 3: /
    

    beforeEach(() => {
        cy.visit(url)
    })

    it('should return a correct result', () => { 

        basicCalculator.typeValueA(a)
        basicCalculator.typeValueB(b)
        basicCalculator.operationType(op)
        basicCalculator.clickCalculate()
    })

})