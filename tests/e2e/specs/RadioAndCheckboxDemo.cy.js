///  <reference types=Cypress/>
describe("Check UI Element", () => {
    // it("Checking Radio Button", () => {
    //     cy.visit("http://192.168.1.162:8081/")

    //     cy.get('input#female').should('be.visible')
    //     cy.get('input#male').should('be.visible')
        
    //     cy.get('input#male').check().should('be.checked')
    //     cy.get('input#female').should('not.be.checked')

    // })

    it("Checking Check Box", () => {
        cy.visit("http://192.168.1.162:8081/")

        // cy.get('input#Monday').should('be.visible')
        // cy.get('input#Monday').check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
        
        // cy.get('input#Monday').uncheck().should('not.be.checked')
         

    })
})