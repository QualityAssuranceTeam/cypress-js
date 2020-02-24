describe('My First Test', function () {
  it('Sign In', function () {
    cy.visit('/ghost/#/signin')
  })
  before('setup Admin User', function () {
    cy.fixture('users/admin').then(adminUser => {
      cy.request({
        method: 'POST',
        url: '/ghost/api/v3/admin/authentication/setup/',
        body: { setup: [adminUser] },
        failOnStatusCode: false
      })
    })
  })
})
