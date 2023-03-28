
class inventoryPage {

    elements = {
        orangeLogo: () => cy.get('.orangehrm-login-branding > img'),
        imgBanner: () => cy.get('.oxd-brand-banner > img'),
        timeText: () => cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
    }

}

module.exports = new inventoryPage();