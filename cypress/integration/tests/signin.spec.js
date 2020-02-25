describe('Sign In Page', () => {
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
  it('should be able to successfully Sign in as the Admin User', () => {
    cy.visit('/ghost/#/signin')

    cy.fixture('users/admin').then(adminUser => {
      cy.get('.email').type(adminUser.email)
      cy.get('.password').type(adminUser.password)
      cy.get('.login').click()
      cy.get('.gh-user-name').should('contain', adminUser.name)
      cy.get('.gh-user-email').should('contain', adminUser.email)
      cy.get('.gh-nav-menu-details-blog').should('contain', adminUser.blogTitle)
    })
  })
})
