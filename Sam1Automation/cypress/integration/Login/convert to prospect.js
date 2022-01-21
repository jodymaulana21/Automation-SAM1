//describe('convert to prospect', function (){
  //  it('tc-2', function(){
        //cy.visit('https://devproxy.astra.co.id/astrasamqa/#/login')
        //cy.get(':nth-child(1) > .form-input').click().type('akbarsales')
        //cy.get(':nth-child(2) > .form-input').click().type('a')
        //cy.get('.btn').click()
        //cy.wait(4000)
        //cy.get('[ng-repeat="additionalNote in dataPopUp"] > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        //cy.get(':nth-child(12) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
        //cy.get('[href="#/suspect"] > .fa').click()
        //cy.wait(4000)
        //cy.get('.customer-filter > .form-input').click().type('sakura')
        //cy.wait(4000)
        //cy.get('.customer-filter-btn-search > .fa').click()
        //cy.wait(5000)
        //cy.get('[data-title="list"] > [style=""] > .suspect-anchor > .media > .media-content').click()
        //cy.wait(5000)
        //cy.get('.container > :nth-child(1) > .btn').click()
        //cy.wait(4000)
        //cy.get('.btn').click()
        //cy.wait(4000)
        //cy.get(':nth-child(6) > .form-input').click().type('sakura.automation@testing.com') //email form
        //cy.get(':nth-child(7) > .form-input').click().type('jl konoho saping rumah sunadhe') //form alamat
        //cy.wait(4000)
        //cy.get(':nth-child(8) > .select2 > .selection > .select2-selection > .select2-selection__arrow').contains('JAKARTA SELATAN').select('JAKARTA SELATAN')
        //cy.get(':nth-child(10) > .form-input').click().type('Fatmawati')//kecamatan
        //cy.get(':nth-child(10) > .form-input').click().type('Fatmawati')//keluruhaan
        //cy.get(':nth-child(14) > .select2 > .selection > .select2-selection').contains('DKI JAKARTA').select('DKI JAKARTA')//region ID
        //cy.get(':nth-child(15) > .form-input').click().type('01/07/1997')//tahun lahir
        //cy.get(':nth-child(15) > .form-input').select('Moslem')//agama
        //cy.get(':nth-child(19) > .form-input').click().type('3273292109890004')//ktp
        //cy.get(':nth-child(24) > .form-input').click().type('94.566.455.1-445.000')//npwp
        //cy.get('.fly-layout-header-content > :nth-child(2) > button > .fa').click()
        //cy.wait(5000)

 //   })
    describe('convert to prospect Edit', function (){
        it('tc-2.1', function(){
            cy.visit('https://devproxy.astra.co.id/astrasamqa/#/login')
            cy.get(':nth-child(1) > .form-input').click().type('akbarsales')
            cy.get(':nth-child(2) > .form-input').click().type('a')
            cy.get('.btn').click()
            cy.wait(4000)
            cy.get('[ng-repeat="additionalNote in dataPopUp"] > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
            cy.get(':nth-child(12) > .ui-dialog > .ui-dialog-content > div > .btn > .fa').click()
            cy.get('[href="#/suspect"] > .fa').click()
            cy.wait(4000)
            cy.get('.customer-filter > .form-input').click().type('sakura')
            cy.wait(4000)
            cy.get('.customer-filter-btn-search > .fa').click()
            cy.wait(5000)
            cy.get('[data-title="list"] > [style=""] > .suspect-anchor > .media > .media-content').click()
            cy.wait(5000)
            cy.get(':nth-child(2) > .btn').click()
            cy.wait(4000)
            cy.get('.btn').click()
            cy.wait(4000)
            cy.get(':nth-child(6) > .form-input').click().type('sakura.automation@testing.com') //email form
            cy.get(':nth-child(7) > .form-input').click().type('jl konoho saping rumah sunadhe') //form alamat
            cy.wait(4000)
            cy.get(':nth-child(8) > .select2 > .selection > .select2-selection').click().type('JAKARTA SELATAN').type('{enter}')
            cy.wait(4000)
            cy.get(':nth-child(10) > .form-input').click().type('Fatmawati')//kecamatan
            cy.get(':nth-child(10) > .form-input').click().type('Fatmawati')//keluruhaan
            cy.get(':nth-child(14) > .select2 > .selection > .select2-selection').contains('DKI JAKARTA').select('DKI JAKARTA')//region ID
            cy.get(':nth-child(15) > .form-input').click().type('01/07/1997')//tahun lahir
            cy.get(':nth-child(15) > .form-input').select('Moslem')//agama
            cy.get(':nth-child(19) > .form-input').click().type('3273292109890004')//ktp
            cy.get(':nth-child(24) > .form-input').click().type('94.566.455.1-445.000')//npwp
            cy.get('.fly-layout-header-content > :nth-child(2) > button > .fa').click()
            cy.wait(5000)


})
})
//})
