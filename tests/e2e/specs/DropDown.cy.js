///  <reference types=Cypress/>

describe('HAndle Dropdown', () => {
    it.skip('dropdown with Select', () => {
        cy.visit('http://localhost:8081/')

        cy.get('#pokemonSelect')
            .select('Charizard')
            .should('have.value', 'charizard')
    })

    it.skip('dropdown without Select', () => {
        cy.visit('http://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('india').type('{enter}')

        cy.get('#select2-billing_country-container')
            .should("have.text", 'India')
    })

    it.skip('Auto Suggested Select', () => {
        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()

    }
    )
    it.skip('Dynamic Select', () => { 
        cy.visit('https://www.google.co.in/')
    
        cy.get('#APjFqb]').type('cypress automation')
    
        cy.wait(3000)
    
        cy.get('div.wM6W7d>span').should('have.length', 11)
    
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() === 'cypress automation salary') {
                cy.wrap($el).click()
            }
        })
    
        cy.get('input[name="q"]').should('have.value', 'cypress automation salary in India')
    })
    
    
})
