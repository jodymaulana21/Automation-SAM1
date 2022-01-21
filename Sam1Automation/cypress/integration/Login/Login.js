describe('Login', function (){
    it('tc-1', function(){
        cy.visit('https://devproxy.astra.co.id/astrasamqa/#/login')
        cy.get(':nth-child(1) > .form-input').click().type('akbarsales')
        cy.get(':nth-child(2) > .form-input').click().type('a')
        cy.get('.btn').click()
        cy.wait(4000)
        cy.get('[ng-repeat="additionalNote in dataPopUp"] > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get(':nth-child(12) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get(':nth-child(10) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get('[href="#/other"] > .fa').click()
        cy.get(':nth-child(5) > .anchor-normal > .fa').click()
        cy.wait(1000)
        cy.get('[ng-controller="CalendarController as calendarCtrl"] > .cta-button > span').click()
        cy.get(':nth-child(1) > .form-input').click().select('Proses')
        cy.get('select').contains('Proses').click()

        



        
})
})