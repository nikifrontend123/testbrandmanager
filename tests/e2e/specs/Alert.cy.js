

describe('Alerts', () => {
    it.skip('JS Alert', () => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get("#alertexamples").click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am an alert box')
        })

        cy.get('#alertexplanation').should('have.text', 'You triggered and handled the alert dialog')
    })

    it.skip('JS Confirm Alerts', () => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get("#confirmexample").click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a confirm alert')
        })
        cy.on('window:confirm', () => false)

        cy.get('#confirmexplanation').should('have.text', 'You clicked Cancel, confirm returned false.')
    })

    it.skip('JS prompted Alerts', () => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get('#promptexample').click()

        // cy.on('window:promt',()=> false)


        cy.get('#promptreturn').should('have.text', 'welcome')
    })

    it('Auth Alert', () => {
        cy.visit('https://testpages.eviltester.com/styled/auth/basic-auth-results.html', 
        { auth: { username: "authorized", password: "password001" } })

        cy.get('#reason').should('have.contain',"Username and Password")
 
    })
})