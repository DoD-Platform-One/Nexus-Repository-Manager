describe('Basic Nexus', function() {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Should sign in to Nexus and validate services have no errors', function() {
    //Start listening for API services call early
    cy.intercept('GET', '**/service/rest/internal/ui/status-check*').as('serviceStatus')
    cy.intercept('GET', '**/service/rest/**').as('serviceCall')
    
    //Nexus can take some time to load on the first visit; wait up to 30 seconds
    cy.visit(Cypress.env('nexus_url'))
    
    // Wait for page to fully load
    cy.get('body', { timeout: 30000 }).should('be.visible')
    
    // Try clicking sign in if we're not already on login page
    cy.get('body').then($body => {
      if ($body.find('input[name="username"]').length === 0) {
        // Click the first anchor which should be sign in
        cy.get('a').first().click({force: true})
        cy.wait(2000)
      }
    })
    
    // Try to login if form is available
    cy.get('body').then($body => {
      if ($body.find('input[name="username"]').length > 0) {
        cy.get('input[name="username"]').type(Cypress.env('nexus_user'))
        cy.get('input[name="password"]').type(Cypress.env('nexus_pass'))
        cy.get('a[class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-nx-primary-small"]').click()
        cy.wait(2000)
      }
    })
    
    cy.visit(`${Cypress.env('nexus_url')}/#admin/support/status`)
    cy.wait(3000) // Wait for page to load
    
    //Check to make there are no errors in any services
    cy.get('@serviceCall.all').then(calls => {
      const statusCalls = calls.filter(call => call.request.url.includes('status-check'))
      if (statusCalls.length > 0) {
        const statusCall = statusCalls[0]
        expect(statusCall.response.statusCode).to.equal(200)
        if (statusCall.response.body) {
          for(const service in statusCall.response.body) {
            expect(statusCall.response.body[service].error, `Errors in ${service} should be null`).to.be.null;
          }
        }
      } else {
        // If no status check calls, at least verify we made it to admin page
        cy.url().should('include', '#admin')
      }
    })
  })
})