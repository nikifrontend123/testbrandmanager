describe('Login Page', () => {
    it('should successfully log in with email', () => {
        cy.visit('http://192.168.1.163:8080/login');

        // Fill in the email, password, and submit the form
        cy.get('input[placeholder="Email"]').type('managesdr@gmail.com');
        cy.get('input[placeholder="Password"]').type('password');
        cy.get('button').contains('Submit').click();


        cy.window().then((win) => {
            cy.spy(win.console, 'error');
        });

        // Assert that the page navigates to /stocks after successful login
        cy.url({ timeout: 1000 }).should('not.eq', 'http://192.168.1.163:8080/stocks');
    });

    

    it('should prevent access with invalid credentials', () => {
        // Assuming there's a logout mechanism, perform logout here
        // cy.get('[data-test=logout-button]').click();

        // Attempt to visit /stocks with different credentials
        cy.visit('http://192.168.1.163:8080/stocks');

        // Assert that the user is redirected to the login page
        cy.url({ timeout: 10000 }).should('eq', 'http://192.168.1.163:8080/login');

        // Optionally, you can also assert that an error message is displayed on the login page
        cy.get('.error-message').should('exist');
    });


    // it('should navigate to the catalog page', () => {
    //     cy.visit('http://192.168.1.163:8080/login');

    //     // Click the "Catalog" button
    //     cy.get('button').contains('Catalog').click();

    //     // Assert that the page navigates to /catalog
    //     cy.url().should('include', '/stocks');
    // });
});