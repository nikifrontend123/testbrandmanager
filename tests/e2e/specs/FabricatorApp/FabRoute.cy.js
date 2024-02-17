describe('Stock Page', () => {
    it.skip('Login', () => {
        cy.visit('http://192.168.1.183:8080/auth/login');
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)').click()
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item').click()

        cy.url('eq', 'http://192.168.1.183:8080/');
        cy.get(':nth-child(2) > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('[style="display: block;"] > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('.rrounded-0 > .d-flex > .fw-bold').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/mydashboard');
    });
    it('Factory Login with email password and all routes', () => {
        cy.visit('http://192.168.1.183:8080/auth/login');
        cy.get('#inputUsername').type('factorya@gmail.com');
        cy.get('#inputPassword').type('password');
        cy.get(':nth-child(2) > .d-flex').click();

        cy.url('eq', 'http://192.168.1.183:8080/');
        cy.get(':nth-child(2) > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('[style="display: block;"] > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('.rrounded-0 > .d-flex > .fw-bold').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/mydashboard');

        ////Orders
        cy.get('.justify-content-around > [href="/factory/new-orders"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/new-orders');

        /////Purchase
        cy.get('[href="/factory/purchases/orders"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/purchases/orders');
        cy.get(':nth-child(2) > .nav-link').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/purchases/bills');

        /////Ledger
        cy.get('[href="/factory/ledgers"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/ledgers');

        /////Sale
        cy.get('[href="/factory/sales/dispatches"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/sales/dispatches');
        cy.get(':nth-child(2) > .nav-link').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/factory/sales/bills');
    });
    it('Vendor Login with email password and all routes', () => {
        cy.visit('http://192.168.1.183:8080/auth/login');
        cy.get('#inputUsername').type('vendor1@gmail.com');
        cy.get('#inputPassword').type('password');
        cy.get(':nth-child(2) > .d-flex').click();

        cy.url('eq', 'http://192.168.1.183:8080/');
        cy.get(':nth-child(2) > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('[style="display: block;"] > .modal-dialog > .modal-content > .modal-body > .d-flex > .btn-group > .btn-outline-secondary').click()
        cy.get('.rrounded-0 > .d-flex > .fw-bold').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/vendor/mydashboard');

        ////Orders
        cy.get('[href="/vendor/new-orders"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/vendor/new-orders');
        ////Ledgers
        cy.get('[href="/vendor/ledgers"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/vendor/ledgers');
        ////Sales
        cy.get('[href="/vendor/sales/dispatches"]').click()
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.183:8080/vendor/sales/dispatches');
    });
});