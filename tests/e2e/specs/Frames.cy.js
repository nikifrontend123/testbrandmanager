describe('', () => {
    it.skip('first', () => {
        cy.visit("http://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

        iframe.clear().type("hello {ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })

    it('second', () => {
        cy.visit("http://the-internet.herokuapp.com/iframe");

        cy.getIframe('#mce_0_ifr').clear().type("hello {ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })
})