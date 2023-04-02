

class datePicker {
    
    elements= {
        h1Text: () => cy.get('h1'),
        inputDate: () => cy.get('datepicker-overview-example'),
        inputIcon: () => cy.get('datepicker-overview-example.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-icon-suffix > .mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target')
    }
    
    typeDate(date) {
        this.elements.inputDate().type(date)
    }
    clickIcon() {
        this.elements.inputIcon().click()
    }

}

module.exports = new datePicker();