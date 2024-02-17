describe("HTTP REquest", () => {

    it("Get Call", () => {
        cy.request('GET', 'http://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal', 200);
    })

    it("Post Call", () => {
        cy.request({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts/',
            body: {
                title: "Test post",
                body: "This is post call",
                userId: 1
            }
        })
            .its('status')
            .should('equal', 201)
    })

    it("Put Call", () => {
        cy.request({
            method: 'PUT',
            url: 'http://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "Test post",
                body: "This is post call",
                userId: 1,
                id: 1
            }
        })
            .its('status')
            .should('equal', 200)
    })

    it("Delete Call", () => {
        cy.request({
            method: 'DELETE',
            url: 'http://jsonplaceholder.typicode.com/posts/1',
        })
            .its('status')
            .should('equal', 200)
    })
})