describe('Stock Page', () => {
    it('should successfully log in with email', () => {
        cy.visit('http://192.168.1.163:8080/login');

        // Fill in the email, password, and submit the form
        cy.get('input[placeholder="Email"]').type('manager@gmail.com');
        cy.get('input[placeholder="Password"]').type('password');
        cy.get('button').contains('Submit').click();

        // Assert that the page navigates to /stocks after successful login
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.163:8080/stocks');
    });

    it('should not access /stocks page without login', () => {
        cy.visit('http://192.168.1.163:8080/stocks');

        // Assert that the user is redirected to the login page
        cy.url({ timeout: 1000 }).should('eq', 'http://192.168.1.163:8080/login');

        // Optionally, you can assert that an error message is displayed on the login page
        cy.get('.error-message').should('exist');
    });

    it('should display response in console', () => {
        cy.visit('http://192.168.1.163:8080/login');

        // Fill in the email, password, and submit the form
        cy.get('input[placeholder="Email"]').type('manager@gmail.com');
        cy.get('input[placeholder="Password"]').type('password');
        cy.get('button').contains('Submit').click();

        // Capture the response and log it to the console
        cy.intercept('POST', '/login').as('loginRequest');
        cy.wait('@loginRequest').then((interception) => {
            console.log('Login Response:', interception.response.body);
        });

        // Assert that the page navigates to /stocks after successful login
        cy.url({ timeout: 1000 }).should('not.eq', 'http://192.168.1.163:8080/stocks');
    });
});
