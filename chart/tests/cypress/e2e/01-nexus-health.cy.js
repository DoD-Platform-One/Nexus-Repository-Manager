describe('Basic Nexus', function() {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Should sign in to Nexus and validate services have no errors', function() {
    //Nexus can take some time to load on the first visit; wait up to 30 seconds
    //Force click in case the div is not visible in the foreground
    cy.visit(Cypress.env('nexus_url'))
    cy.get('[data-qtip="Sign in"]', {timeout: 30000}).click({force: true})
    cy.get('input[name="username"]').type(Cypress.env('nexus_user'))
    cy.get('input[name="password"]').type(Cypress.env('nexus_pass'))
    cy.get('a[class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-nx-primary-small"]').click()

    //Start listenting for API services call
    cy.intercept('GET', '**/service/rest/internal/ui/status-check*').as('serviceStatus')
    cy.visit(`${Cypress.env('nexus_url')}/#admin/support/status`)
    //Check to make there are no errors in any services
    cy.wait('@serviceStatus').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
      for(const service in interception.response.body) {
        expect(interception.response.body[service].error, `Errors in ${service} should be null`).to.be.null;
      }
    })
  })
})