describe('Handle Tabs', (() => {

    it('First', () => {
        cy.visit('https://testpages.eviltester.com/styled/windows-test.html')
        cy.get('#gobasicajax').invoke('removeAttr', 'target').click()
        cy.go('back')
    })
}))