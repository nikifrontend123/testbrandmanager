
describe('template spec', () => {
    it('verify Title_positive', () => {
        cy.visit('http://192.168.1.163:8080/')
        cy.title().should('eq', 'brand-manager')
    })

    it('verify Title_negative', () => {
        cy.visit('http://192.168.1.163:8080/')
        cy.title().should('not.eq', 'manager')
    })
    it('should navigate to LoginPage when "Get Started" button is clicked', () => {
        cy.visit('/');
        cy.contains('Get Started').click();
        cy.window().then((win) => {
            // Log any errors to the console
            cy.spy(win.console, 'error');
        });
    });
    // it('should navigate to LoginPage when "Get Started" button is clicked', () => {
    //     cy.visit('http://192.168.1.163:8080/login');
    //     cy.contains('Get Started').click();
    //     cy.window().then((win) => {
    //         // Log any errors to the console
    //         cy.spy(win.console, 'error');
    //     });
    // });
     
})
 
