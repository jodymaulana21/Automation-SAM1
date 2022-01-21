describe('Calender and task', function (){
    it('tc-4', function(){
        cy.visit('https://devproxy.astra.co.id/astrasamqa/#/login')
        cy.get(':nth-child(1) > .form-input').click().type('wb')
        cy.get(':nth-child(2) > .form-input').click().type('a')
        cy.get('.btn').click()
        cy.wait(4000)
        cy.get('[ng-repeat="additionalNote in dataPopUp"] > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get(':nth-child(12) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get(':nth-child(10) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.wait(4000)
        cy.get('[href="#/other"] > .fa').click()
        cy.wait(4000)
        cy.get(':nth-child(5) > .anchor-normal').click()
        cy.get('[ng-controller="CalendarController as calendarCtrl"] > .cta-button > span').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > .form-input').select('Retention Activity')
        cy.wait(4000)
        cy.get('body > main > div > div > div > div.fly-layout-content-body > div > div > form > fieldset > div:nth-child(2) > select').select('FU CR1 Call')
        cy.wait(4000)


        
})
})