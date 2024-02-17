 
describe('Assertion', () => {
    it('Implicit Assertion', () => {
        cy.visit('http://192.168.1.163:8080/login');

        // cy.url().should('include', '/login')
        // .should('eq', 'http://192.168.1.163:8080/login')
        // .should('contain', 'login');

        cy.url()
            .should('include', '/login')
            .and('eq', 'http://192.168.1.163:8080/login')
            .and('contain', 'login');

        cy.get('img')
            .should('be.visible')
            .and('exist')

    });

    it('Explicit Assertions', () => {
        cy.visit('http://192.168.1.163:8080/login');

        let expName = "password";
        //BDD Style
        cy.get('#floatingInput2').should('have.value', expName);
        cy.get('#floatingInput2').should('not.have.value', 'incorrectValue');
        //TDD Style
        assert.equal('#floatingInput2', expName)
        assert.notEqual('#floatingInput2', expName)

    });
    
});
