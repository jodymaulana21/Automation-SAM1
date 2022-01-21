describe('create suspect', function (){
    it('tc-1', function(){
        cy.visit('https://devproxy.astra.co.id/astrasamqa/#/login')
        cy.get(':nth-child(1) > .form-input').click().type('akbarsales')
        cy.get(':nth-child(2) > .form-input').click().type('a')
        cy.get('.btn').click()
        cy.wait(4000)
        cy.get('[ng-repeat="additionalNote in dataPopUp"] > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get(':nth-child(12) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get('[href="#/suspect"] > .fa').click()
        cy.get('.is-active > .fa').click()
        cy.get('.fa-plus').click()
        cy.get(':nth-child(5) > .flt-menus-button > .fa').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > .form-input').select("Ms")
        cy.get(':nth-child(2) > .form-input').click().type('sakura')
        cy.get(':nth-child(3) > .form-input').click().type('0813222145871')
        cy.wait(4000)
        cy.get(':nth-child(4) > .form-input').select('Auto2000 Trade-in')
        cy.wait(4000)
        cy.get(':nth-child(5) > .form-input').select('Auto2000 Apps Trade-in')
        cy.wait(4000)
        cy.get('.fly-layout-header-content > :nth-child(2) > button > .fa').click()
        cy.wait(4000)
        cy.wait(4000)
        cy.wait(4000)
        cy.get('.customer-filter > .form-input').click().type('sakura')
        cy.get('.customer-filter-btn-search > .fa').click()
        cy.get('[data-title="list"] > li > .suspect-anchor > .media > .media-content').click()



})
})