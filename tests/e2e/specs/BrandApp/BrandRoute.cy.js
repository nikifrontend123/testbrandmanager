describe('Stock Page', () => {
    it.skip('Login', () => {
        cy.visit('http://192.168.1.183:8080/auth/login');
        cy.get('.card-body > .justify-content-between > :nth-child(1)').click()

        cy.url('eq', 'http://192.168.1.183:8080/');
        cy.get(':nth-child(2) > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('[style="display: block;"] > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('.rrounded-0 > .d-flex > .fw-bold').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/mydashboard');
    });
    it('Login with email password', () => {
        cy.visit('http://192.168.1.183:8080/auth/login');

        cy.get('#inputUsername').type('mbrand@gmail.com');
        cy.get('#inputPassword').type('password');
        cy.get(':nth-child(2) > .d-flex').click();

        cy.url('eq', 'http://192.168.1.183:8080/');
        cy.get(':nth-child(2) > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('[style="display: block;"] > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('.rrounded-0 > .d-flex > .fw-bold').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/mydashboard');

        ////Parties
        cy.get('.justify-content-around > [href="/deshigirl/parties"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/parties');

        ////Products
        cy.get('.justify-content-around > [href="/deshigirl/products"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/products');
        ////Products//Details
        cy.get(':nth-child(1) > :nth-child(1) > .of-cover').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/products/detail/top-summer');

        ////Purchase//bill
        cy.get('[href="/deshigirl/purchases/bills"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/purchases/bills');
        ////Purchase//inward
        cy.get(':nth-child(2) > .nav-link').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/purchases/incomings');
        ////Purchase//po
        cy.get(':nth-child(1) > .nav-link').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/purchases/pos');


        ////Sales//bill
        cy.get('[href="/deshigirl/sales/bills"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/sales/bills');
        ////Sales//outward
        cy.get(':nth-child(2) > .nav-link').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/sales/outgoings');
        ////Sales//po
        cy.get(':nth-child(1) > .nav-link').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/deshigirl/sales/sos');
    });
});