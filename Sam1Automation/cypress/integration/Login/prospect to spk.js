describe('Prospect to spk', function (){
    it('tc-3', function(){
        cy.visit('https://devproxy.astra.co.id/astrasamqa/#/login')
        cy.get(':nth-child(1) > .form-input').click().type('akbarsales')
        cy.get(':nth-child(2) > .form-input').click().type('a')
        cy.get('.btn').click()
        cy.wait(4000)
        cy.get('[ng-repeat="additionalNote in dataPopUp"] > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.wait(4000)
        cy.get(':nth-child(12) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        cy.get('[href="#/suspect"] > .fa').click()
        cy.wait(4000)
        cy.get('[href="#/prospect"]').click()
        cy.wait(4000)
        cy.get('[data-title="new"] > [style=""] > .suspect-anchor > .media > .media-content').click()
        cy.wait(4000)
        cy.get('body > main > div > div > div > div.fly-layout-content-body > div.prospect-tab.material-tab > div > a:nth-child(4)').click()
        cy.wait(4000)
        cy.get('.card-content > div').click()
        cy.wait(4000)
        cy.get('.container.ng-invalid > :nth-child(4) > .form-input').click().type('testing buat smoothtest yanga da di sam 1 coy')
        cy.wait(4000)
        cy.get('.container.ng-invalid > :nth-child(5) > .form-input').select('Prospect SPK')
        cy.wait(4000)
        cy.screanshot()
        
        
})
})