describe('My First Test', () => {
  it('Sign In', () => {
    cy.visit('/ghost/#/signin')

    cy.fixture('users/admin').then(adminUser => {
      cy.get('.email').type(adminUser.email)
      cy.get('.password').type(adminUser.password)
    })
    cy.get('.login').click()
    // TODO: Assert new URL
  })
  before('setup Admin User', () => {
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
